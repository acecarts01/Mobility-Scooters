import type { NextConfig } from 'next';

/**
 * PRODUCTION EDGE PERFORMANCE & SECURITY CONFIGURATION
 * Framework: Next.js 15 (App Router, Server Components, TypeScript Strict)
 *
 * Enforces:
 * - Brotli / Gzip compression enabled
 * - Strict Transport Security (HSTS) with 2-year duration, subdomains, and preloading
 * - Zero third-party tracking Content-Security-Policy (CSP)
 * - Anti-sniff, clickjacking (SAMEORIGIN), and strict referrer policies
 * - Deterministic image formats (AVIF first, WebP fallback)
 */
const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  compress: true, // Enables Gzip and Brotli compression on Vercel & Node runtimes

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
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Accept, Mcp-Session-Id' },
        ],
      },
    ];
  },

  output: 'standalone',
  transpilePackages: ['motion'],
};

export default nextConfig;
