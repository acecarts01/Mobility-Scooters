import { CATEGORIES, SHOP, SITE } from '@/src/config/site';
import { PRODUCTS_CATALOG } from '@/src/lib/catalog';

export async function POST(request: Request) {
  const body = await request.json();
  const { method, params, id } = body;

  const response = {
    jsonrpc: "2.0",
    id: id || null,
    result: null as any,
    error: null as any
  };

  try {
    switch (method) {
      case 'initialize':
        response.result = {
          protocolVersion: "2024-11-05",
          capabilities: { tools: {}, resources: {} },
          serverInfo: { name: SITE.name, version: "1.0.0" }
        };
        break;

      case 'tools/list':
        response.result = {
          tools: [
            { 
              name: "search_products", 
              description: "Search products by keyword, category, max_price", 
              inputSchema: { 
                type: "object", 
                properties: { 
                  query: { type: "string" }, 
                  category: { type: "string" }, 
                  max_price: { type: "number" } 
                } 
              } 
            },
            { 
              name: "get_product", 
              description: "Get full product details by slug", 
              inputSchema: { 
                type: "object", 
                required: ["slug"], 
                properties: { 
                  slug: { type: "string" } 
                } 
              } 
            },
            { 
              name: "list_categories", 
              description: "List all product categories", 
              inputSchema: { 
                type: "object", 
                properties: {} 
              } 
            },
            { 
              name: "get_policies", 
              description: "Get shipping, payment, returns policies", 
              inputSchema: { 
                type: "object", 
                properties: {} 
              } 
            },
            { 
              name: "create_order_draft", 
              description: "Create prefilled order URL. Human completes — never captures payment.", 
              inputSchema: { 
                type: "object", 
                properties: { 
                  items: { type: "array" }, 
                  notes: { type: "string" } 
                } 
              } 
            }
          ]
        };
        break;

      case 'tools/call':
        const { name, arguments: args } = params;
        if (name === 'search_products') {
          const query = args?.query?.toLowerCase() || '';
          const maxPrice = args?.max_price || 0;
          let res = PRODUCTS_CATALOG.filter(p => 
            !query ||
            p.name.toLowerCase().includes(query) || 
            p.shortDescription.toLowerCase().includes(query) ||
            p.brand.toLowerCase().includes(query) ||
            p.categorySlug === args?.category ||
            p.category === args?.category
          );
          if (maxPrice > 0) res = res.filter(p => p.price <= maxPrice);
          const formatted = res.map(p => ({
            id: p.id,
            sku: p.sku,
            slug: p.slug,
            name: p.name,
            price: p.price,
            currency: SITE.currency,
            category: p.categorySlug,
            shortDescription: p.shortDescription,
            url: `https://${SITE.domain}/shop/${p.categorySlug}/${p.slug}/`
          }));
          response.result = { content: [{ type: "text", text: JSON.stringify(formatted) }] };
        } else if (name === 'get_product') {
          const p = PRODUCTS_CATALOG.find(p => p.slug === args?.slug || p.id === args?.slug);
          if (p) {
            response.result = { 
              content: [{ 
                type: "text", 
                text: JSON.stringify({
                  ...p,
                  currency: SITE.currency,
                  url: `https://${SITE.domain}/shop/${p.categorySlug}/${p.slug}/`
                }) 
              }] 
            };
          } else {
            response.result = { content: [{ type: "text", text: JSON.stringify({ error: "Product not found" }) }] };
          }
        } else if (name === 'list_categories') {
          const cats = CATEGORIES.map(c => ({
            slug: c.slug,
            name: c.name,
            description: c.description,
            url: `https://${SITE.domain}/shop/${c.slug}/`
          }));
          response.result = { content: [{ type: "text", text: JSON.stringify(cats) }] };
        } else if (name === 'get_policies') {
          response.result = { content: [{ type: "text", text: JSON.stringify(SHOP) }] };
        } else if (name === 'create_order_draft') {
          const items = args?.items || [];
          const notes = args?.notes || '';
          const text = encodeURIComponent(`Hi Lifestyle Mobility, I would like to enquire about ordering:\n${JSON.stringify(items)}\nNotes: ${notes}`);
          const whatsappUrl = `https://wa.me/61400000000?text=${text}`;
          response.result = {
            content: [{
              type: "text",
              text: JSON.stringify({
                status: "draft_created",
                ordering: "human-assisted",
                whatsappUrl,
                notes: "Human completes order. No automated payment captured."
              })
            }]
          };
        }
        break;

      default:
        response.error = { code: -32601, message: "Method not found" };
    }
  } catch (err) {
    response.error = { code: -32603, message: "Internal error" };
  }

  return Response.json(response, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept, Mcp-Session-Id'
    }
  });
}

export async function OPTIONS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept, Mcp-Session-Id'
    }
  });
}
