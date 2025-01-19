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
    const { name, phone } = await request.json();

    // Basic phone number validation
    if (!phone || phone.length < 10) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Create new waitlist entry
    const waitlistEntry = await prisma.waitlist.create({
      data: {
        name,
        phone,
      },
    });

    // Format and send Telegram message
    const telegramMessage = `
<b>🎉 New Website Submission!</b>

Name: ${name || 'Not provided'}
Phone: ${phone}

<i>This user wants to connect with you from mehandy.in</i>
    `.trim();

    await sendToTelegram(telegramMessage);

    return NextResponse.json(waitlistEntry, { status: 201 });
  } catch (error) {
    console.error('Error in waitlist API:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
} 