import { SITE } from '@/src/config/site';

export default function Robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/thank-you-contact/',
        '/thank-you-order/',
        '/thank-you-wholesale/',
        '/api/',
      ],
    },
    sitemap: `https://${SITE.domain}/sitemap.xml`,
  };
}
