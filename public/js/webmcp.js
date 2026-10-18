(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;
  
  const DOMAIN = 'lifestylemobilityscooters.com.au';
  const WHATSAPP = '+61400000000';

  navigator.modelContext.provideContext({
    tools: [
      { 
        name: "search_products", 
        description: "Search Lifestyle Mobility products by keyword or category", 
        inputSchema: { 
          type: "object", 
          properties: { 
            query: { type: "string" }, 
            category: { type: "string" } 
          } 
        }, 
        execute: async ({ query, category }) => { 
          const params = new URLSearchParams(); 
          if (query) params.set('q', query); 
          if (category) params.set('category', category); 
          const res = await fetch(`https://${DOMAIN}/api/products/?${params}`); 
          return res.json(); 
        } 
      },
      { 
        name: "order_via_whatsapp", 
        description: "Initiate a WhatsApp order with Lifestyle Mobility.", 
        inputSchema: { 
          type: "object", 
          properties: { 
            message: { type: "string" } 
          } 
        }, 
        execute: async ({ message }) => { 
          const url = message ? `https://wa.me/${WHATSAPP.replace('+', '')}?text=${encodeURIComponent(message)}` : `https://wa.me/${WHATSAPP.replace('+', '')}`; 
          window.open(url, '_blank'); 
          return { url }; 
        } 
      }
    ]
  });
})();
