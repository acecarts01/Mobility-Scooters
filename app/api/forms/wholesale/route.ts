import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const wholesaleSchema = z.object({
  businessName: z.string().min(2),
  abn: z.string().optional(),
  contactName: z.string().min(2),
  email: z.string().email(),
  phone: z.string(),
  businessType: z.string(),
  message: z.string().optional(),
  client_secret: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    if (process.env.ZOHO_CLIENT_SECRET && body.client_secret !== process.env.ZOHO_CLIENT_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const validatedData = wholesaleSchema.parse(body);

    const webhookUrl = process.env.ZOHO_WHOLESALE_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('ZOHO_WHOLESALE_WEBHOOK_URL is not defined');
      return NextResponse.json({ success: true, message: 'Wholesale inquiry received (Webhook URL missing)' });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...validatedData,
        source: 'Wholesale Registration Form',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send to Zoho');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Wholesale Form Error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
