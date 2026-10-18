import { next } from '@vercel/functions';

export const config = {
  matcher: '/:path*',
};

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const accept = request.headers.get('accept') || '';

  // Simple Markdown negotiation check for the demo
  // In a real Vercel environment, this would serve .md files for specific routes
  if (accept.includes('text/markdown') && !url.pathname.startsWith('/api')) {
    // This is a placeholder for the real markdown conversion logic
    // which would normally happen during build or via a dedicated API
  }

  return next();
}
