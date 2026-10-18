import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10),
  client_secret: z.string().optional(), // For internal verification if needed
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate secret if provided in env
    if (process.env.ZOHO_CLIENT_SECRET && body.client_secret !== process.env.ZOHO_CLIENT_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const validatedData = contactSchema.parse(body);

    const webhookUrl = process.env.ZOHO_CONTACT_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('ZOHO_CONTACT_WEBHOOK_URL is not defined');
      // For development/demo, we might just return success
      return NextResponse.json({ success: true, message: 'Message received (Webhook URL missing)' });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...validatedData,
        source: 'Website Contact Form',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send to Zoho');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact Form Error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
