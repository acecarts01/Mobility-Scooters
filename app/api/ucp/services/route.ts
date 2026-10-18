import { SITE, CONTACT } from '@/src/config/site';

export async function GET() {
  return Response.json({
    ucp: "1.0",
    protocol_version: "1.0",
    site: `https://${SITE.domain}`,
    name: SITE.name,
    services: [
      { id: "catalog", type: "catalog", url: `https://${SITE.domain}/shop/` },
      { id: "mcp", type: "mcp", url: `https://${SITE.domain}/api/mcp/` },
      { id: "contact", type: "support", url: `https://${SITE.domain}/contact/` }
    ],
    endpoints: {
      mcp: `https://${SITE.domain}/api/mcp/`,
      catalog: `https://${SITE.domain}/shop/`,
      llms_txt: `https://${SITE.domain}/llms.txt`
    },
    contact: {
      whatsapp: `https://wa.me/${CONTACT.whatsapp.replace('+', '')}`,
      email: CONTACT.email
    }
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    }
  });
}
