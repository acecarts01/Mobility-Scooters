// scripts/download-assets.mjs
import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import http from 'node:http';

// 1. Master Image Download List
// Map direct image links to your catalog's slug/filename
const imagesToDownload = [
  {
    url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    filename: 'lifestyle-aerofold.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    filename: 'solax-transformer.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    filename: 'pride-go-go-ultra-x.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    filename: 'metroglide-daily-shopper.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
    filename: 'outback-cruiser-hd.webp'
  }
  // Append remaining items here
];

const destFolder = path.resolve('public/images/products');
if (!fs.existsSync(destFolder)) {
  fs.mkdirSync(destFolder, { recursive: true });
}

// Helper to fetch file with redirect support and spoofed headers
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;

    const options = {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-AU,en-US;q=0.9,en;q=0.8'
      }
    };

    client.get(url, options, (res) => {
      // Follow 301, 302, 307, 308 redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(downloadFile(res.headers.location, destPath));
      }

      if (res.statusCode !== 200) {
        return reject(
          new Error(`Failed to download ${url} - Status Code: ${res.statusCode}`)
        );
      }

      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => {}); // Clean up partial download
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Concurrency pool runner (avoids crashing network with 200+ parallel requests)
async function runDownloadPool(items, concurrency = 5) {
  let index = 0;
  let completed = 0;
  const total = items.length;

  console.log(`Starting download of ${total} product images (Concurrency: ${concurrency})...\n`);

  async function worker() {
    while (index < items.length) {
      const current = items[index++];
      const filePath = path.join(destFolder, current.filename);

      // Skip already downloaded assets to save bandwidth
      if (fs.existsSync(filePath)) {
        completed++;
        console.log(`[SKIPPED] ${current.filename} (already exists) [${completed}/${total}]`);
        continue;
      }

      try {
        await downloadFile(current.url, filePath);
        completed++;
        console.log(`[SUCCESS] ${current.filename} [${completed}/${total}]`);
      } catch (err) {
        console.error(`[ERROR] Failed: ${current.filename} -> ${err.message}`);
      }
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);
  console.log('\nAll asset downloads completed successfully.');
}

runDownloadPool(imagesToDownload, 5);
