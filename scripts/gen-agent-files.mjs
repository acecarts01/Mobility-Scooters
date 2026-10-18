import fs from 'fs';
import path from 'path';
import { SITE, CONTACT, SHOP, BRAND, CATEGORIES, PRODUCTS } from '../src/config/site.js';

const DOMAIN = SITE.domain;
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const WELL_KNOWN_DIR = path.join(PUBLIC_DIR, '.well-known');
const AGENT_SKILLS_DIR = path.join(WELL_KNOWN_DIR, 'agent-skills');
const MCP_DIR = path.join(WELL_KNOWN_DIR, 'mcp');

// Ensure directories exist
[PUBLIC_DIR, WELL_KNOWN_DIR, AGENT_SKILLS_DIR, MCP_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// 1. robots.txt
const robotsTxt = `User-agent: *
Disallow: /thank-you-contact/
Disallow: /thank-you-order/
Disallow: /thank-you-wholesale/
Sitemap: https://${DOMAIN}/sitemap.xml

Content-Signal: search=yes, ai-input=yes, ai-train=no

# AI crawlers
User-agent: GPTBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /

# Agent-readable resources
# llms.txt: https://${DOMAIN}/llms.txt
# API Catalog: https://${DOMAIN}/.well-known/api-catalog
# Agent Skills: https://${DOMAIN}/.well-known/agent-skills/index.json
# MCP Server Card: https://${DOMAIN}/.well-known/mcp/server-card.json
`;
fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt);

// 2. llms.txt
const llmsTxt = `# ${SITE.name}
> ${SITE.tagline}

${BRAND.description}

## Identity
- Name: ${SITE.name}
- HQ: ${CONTACT.address}
- Founded: ${BRAND.foundingYear}
- Entity: ${CONTACT.entity} (ABN: ${CONTACT.abn})

## Contact
- Phone: ${CONTACT.phone}
- WhatsApp: ${CONTACT.whatsapp}
- Email: ${CONTACT.email}

## Policies
- Min Order: ${SHOP.minOrder} ${SITE.currency}
- Free Shipping: Over ${SHOP.freeShippingThreshold} ${SITE.currency} (Accessories)
- Metro Freight: ${SHOP.flatMetroFreight} ${SITE.currency} (Vehicles)
- Compliance: 100% Pedestrian Legal (ARR 204), GST-Free Medical Aids.

## Product Categories
${CATEGORIES.map(c => `- [${c.name}](https://${DOMAIN}/shop/${c.slug}/): ${c.description}`).join('\n')}

## Featured Products
${PRODUCTS.filter(p => p.featured).map(p => `- [${p.name}](https://${DOMAIN}/shop/${p.category}/${p.slug}/): ${p.price} ${SITE.currency} (GST-Free)`).join('\n')}

## Optional Resources
- [API Catalog](https://${DOMAIN}/.well-known/api-catalog)
- [Agent Skills Index](https://${DOMAIN}/.well-known/agent-skills/index.json)
- [MCP Server Card](https://${DOMAIN}/.well-known/mcp/server-card.json)
- [Auth Documentation](https://${DOMAIN}/auth.md)
`;
fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), llmsTxt);

// 3. auth.md
const authMd = `# Auth.md

## Site: ${SITE.name}

## Agent Registration
No authentication required. All resources are publicly accessible.

## Public Resources
| Resource | URL |
|---|---|
| Product Catalog | https://${DOMAIN}/shop/ |
| NDIS Guide | https://${DOMAIN}/ndis-guide/ |
| FAQ | https://${DOMAIN}/faq/ |

## Authentication
\`\`\`json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required."
  }
}
\`\`\`

## Ordering
Human-in-the-loop required. Agents may browse and prepare order drafts.
Orders are completed via WhatsApp or the order form.
`;
fs.writeFileSync(path.join(PUBLIC_DIR, 'auth.md'), authMd);

// 4. .well-known/api-catalog
const apiCatalog = {
  linkset: [
    { anchor: `https://${DOMAIN}/`, "https://www.iana.org/assignments/link-relations/service-doc": [{ href: `https://${DOMAIN}/faq/` }], title: `${SITE.name} FAQ` },
    { anchor: `https://${DOMAIN}/shop/`, type: "text/html", title: "Product Catalog" },
    { anchor: `https://${DOMAIN}/wholesale/`, type: "text/html", title: "Wholesale & NDIS" },
    { anchor: `https://${DOMAIN}/api/products/`, type: "application/json", title: "Products API" },
    { anchor: `https://${DOMAIN}/api/categories/`, type: "application/json", title: "Categories API" },
    { anchor: `https://${DOMAIN}/api/search/`, type: "application/json", title: "Search API" },
    { anchor: `https://${DOMAIN}/api/mcp/`, type: "application/json", "https://www.iana.org/assignments/link-relations/service-desc": [{ href: `https://${DOMAIN}/.well-known/mcp/server-card.json` }], title: "MCP Server" }
  ]
};
fs.writeFileSync(path.join(WELL_KNOWN_DIR, 'api-catalog'), JSON.stringify(apiCatalog, null, 2));

// 5. .well-known/agent-skills/index.json
const agentSkills = {
  "$schema": "https://agentskills.io/schema/v0.2.0/index.json",
  "name": SITE.name,
  "url": `https://${DOMAIN}`,
  "description": SITE.tagline,
  "skills": [
    { "name": "search-products", "type": "commerce", "description": "Search mobility scooters by keyword, category, or price", "url": `https://${DOMAIN}/api/mcp/` },
    { "name": "browse-catalog", "type": "navigation", "description": "Browse full clinical mobility scooter and accessories catalog", "url": `https://${DOMAIN}/shop/` },
    { "name": "order-draft", "type": "commerce", "description": "Create a prefilled order draft. Human completes order via WhatsApp.", "url": `https://${DOMAIN}/api/mcp/` },
    { "name": "ndis-guide", "type": "content", "description": "NDIS capital support and assistive technology funding guide", "url": `https://${DOMAIN}/ndis-guide/` }
  ]
};
fs.writeFileSync(path.join(AGENT_SKILLS_DIR, 'index.json'), JSON.stringify(agentSkills, null, 2));

// 6. .well-known/mcp/server-card.json
const serverCard = {
  "$schema": "https://modelcontextprotocol.io/schemas/server-card/v1.json",
  "serverInfo": { "name": SITE.name, "version": "1.0.0", "description": BRAND.description, "homepage": `https://${DOMAIN}`, "contact": { "email": CONTACT.email, "whatsapp": CONTACT.whatsapp } },
  "transport": { "type": "streamable-http", "endpoint": `https://${DOMAIN}/api/mcp/` },
  "capabilities": {
    "tools": [
      { "name": "search_products", "description": "Search products by keyword, category, max_price", "inputSchema": { "type": "object", "properties": { "query": { "type": "string" }, "category": { "type": "string" }, "max_price": { "type": "number" } } } },
      { "name": "get_product", "description": "Get full product details by slug", "inputSchema": { "type": "object", "required": ["slug"], "properties": { "slug": { "type": "string" } } } },
      { "name": "list_categories", "description": "List all product categories", "inputSchema": { "type": "object", "properties": {} } },
      { "name": "get_policies", "description": "Get shipping, payment, returns policies", "inputSchema": { "type": "object", "properties": {} } },
      { "name": "create_order_draft", "description": "Create prefilled order URL. Human completes — never captures payment.", "inputSchema": { "type": "object", "properties": { "items": { "type": "array" }, "notes": { "type": "string" } } } }
    ],
    "resources": [
      { "name": "product-catalog", "description": "Full product catalog", "uri": `https://${DOMAIN}/shop/` },
      { "name": "wholesale", "description": "Wholesale pricing", "uri": `https://${DOMAIN}/wholesale/` },
      { "name": "blog", "description": "Educational mobility guides", "uri": `https://${DOMAIN}/blog/` }
    ],
    "commerce": { "ordering": "human-assisted-whatsapp-or-form", "payment": SHOP.paymentMethods, "currency": SITE.currency, "minimumOrder": String(SHOP.minOrder), "freeShipping": String(SHOP.freeShippingThreshold) }
  },
  "legal": {
    "ageRestriction": "None",
    "productType": "Assistive Mobility Technology (AS/NZS 3695.2:2013)",
    "compliance": "Austroads Australian Road Rules compliance (10 km/h pedestrian zone limit; GST-free medical equipment under GST Act 1999 Schedule 3)"
  }
};
fs.writeFileSync(path.join(MCP_DIR, 'server-card.json'), JSON.stringify(serverCard, null, 2));

// 7. .well-known/ucp
const ucp = {
  "ucp": "1.0",
  "site": `https://${DOMAIN}`,
  "name": SITE.name,
  "description": SITE.tagline,
  "services": [
    { "id": "catalog", "type": "catalog", "url": `https://${DOMAIN}/shop/` },
    { "id": "mcp", "type": "mcp", "url": `https://${DOMAIN}/api/mcp/` }
  ]
};
fs.writeFileSync(path.join(WELL_KNOWN_DIR, 'ucp'), JSON.stringify(ucp, null, 2));

// 8. IndexNow verification
fs.writeFileSync(path.join(PUBLIC_DIR, `${SITE.indexNowKey}.txt`), SITE.indexNowKey);

console.log('✅ Agent-ready files generated successfully.');
