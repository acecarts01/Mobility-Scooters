import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 480, 640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 640],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lifestylemobilityscooters.com.au',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.solaxmobility.com',
      }
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
};

export default nextConfig;
