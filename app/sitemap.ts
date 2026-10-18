import { CATEGORIES, SITE } from '@/src/config/site';

export default async function Sitemap() {
  const domain = `https://${SITE.domain}`;
  const now = new Date().toISOString();

  const pages = [
    '',
    '/shop/',
    '/about/',
    '/blog/',
    '/faq/',
    '/contact/',
  ].map(p => ({
    url: `${domain}${p}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.8,
  }));

  const categoryPages = CATEGORIES.map(c => ({
    url: `${domain}/shop/${c.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...pages, ...categoryPages];
}
