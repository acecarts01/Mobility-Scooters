import { MetadataRoute } from 'next';

/**
 * PRODUCTION ROBOTS.TXT ROUTE (Next.js 15 App Router)
 * Operating Entity: BUTLER TRADING PTY. LTD.
 * Domain: lifestylemobilityscooters.com.au
 *
 * Strict segmentation:
 * 1. Search Engine Indexers (Googlebot, Bingbot) -> Allow public indexable routes, disallow api/checkout/faceted queries.
 * 2. AI Retrieval Agents (PerplexityBot, ChatGPT-User, Claude-Web, Google-Agent) -> Real-time passage citations & AI answers.
 * 3. AI Training Crawlers (Google-Extended, GPTBot, ClaudeBot, CCBot, Applebot-Extended, Bytespider, Meta-ExternalAgent) -> Prohibited from bulk dataset training.
 * 4. Default Wildcard Policy.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://lifestylemobilityscooters.com.au';

  return {
    rules: [
      // 1. Traditional Search Engine Indexers (SERP Crawlers)
      {
        userAgent: ['Googlebot', 'Bingbot'],
        allow: [
          '/',
          '/shop/',
          '/shop/*',
          '/ndis-funding/',
          '/about/',
          '/faq/',
          '/contact/',
          '/reviews/',
          '/compare/',
          '/calculator/',
          '/quiz/',
          '/blog/',
          '/blog/*',
        ],
        disallow: [
          '/api/',
          '/checkout/',
          '/thank-you-contact/',
          '/thank-you-order/',
          '/thank-you-wholesale/',
          '/reply-portal/',
          '/*?*', // Prevent faceted parameter crawl budget exhaustion
        ],
      },

      // 2. AI Search & Real-Time Retrieval Agents (Passage Citations & AI Overviews)
      {
        userAgent: [
          'PerplexityBot',
          'ChatGPT-User',
          'Claude-Web',
          'Google-Agent',
        ],
        allow: [
          '/',
          '/shop/',
          '/shop/*',
          '/ndis-funding/',
          '/about/',
          '/faq/',
          '/contact/',
          '/reviews/',
          '/blog/',
          '/blog/*',
        ],
        disallow: [
          '/api/',
          '/checkout/',
          '/thank-you-contact/',
          '/thank-you-order/',
          '/thank-you-wholesale/',
          '/reply-portal/',
          '/*?*',
        ],
      },

      // 3. AI Model Bulk Training & Dataset Mining Crawlers
      {
        userAgent: [
          'Google-Extended',
          'GPTBot',
          'ClaudeBot',
          'CCBot',
          'Applebot-Extended',
          'Bytespider',
          'Meta-ExternalAgent',
        ],
        disallow: [
          '/',
          '/api/',
          '/checkout/',
          '/thank-you-contact/',
          '/thank-you-order/',
          '/thank-you-wholesale/',
          '/reply-portal/',
          '/*?*',
        ],
      },

      // 4. Default Fallback Policy for General Crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/checkout/',
          '/thank-you-contact/',
          '/thank-you-order/',
          '/thank-you-wholesale/',
          '/reply-portal/',
          '/*?*',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
