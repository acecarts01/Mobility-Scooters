import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const orderSchema = z.object({
  customerName: z.string().min(2),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postcode: z.string(),
  items: z.array(z.object({
    slug: z.string(),
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
  })),
  total: z.number(),
  paymentMethod: z.string(),
  orderReference: z.string(), // e.g., LMS-849201
  notes: z.string().optional(),
  client_secret: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    if (process.env.ZOHO_CLIENT_SECRET && body.client_secret !== process.env.ZOHO_CLIENT_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const validatedData = orderSchema.parse(body);

    const webhookUrl = process.env.ZOHO_ORDER_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('ZOHO_ORDER_WEBHOOK_URL is not defined');
      return NextResponse.json({ success: true, message: 'Order draft received (Webhook URL missing)', orderReference: validatedData.orderReference });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...validatedData,
        source: 'Website Order Form',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send to Zoho');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Order Form Error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
