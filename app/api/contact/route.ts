import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const sendToTelegram = async (message: string) => {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error('Telegram credentials not configured');
  }

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to send Telegram message');
  }
};

export async function POST(request: Request) {
  try {
    const { name, phone, message } = await request.json();

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Create contact entry
await prisma.waitlist.create({
      data: {
        name,
        phone,
        message,
      },
    });

    // Format message for Telegram
    const telegramMessage = `
<b>New Contact Form Submission</b>

Name: ${name}
Phone: ${phone}
${message ? `\nMessage: ${message}` : ''}
    `.trim();

    // Send to Telegram
    await sendToTelegram(telegramMessage);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
} 