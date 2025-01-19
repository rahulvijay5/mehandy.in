import { NextResponse } from 'next/server';
import { incrementCounter } from '@/lib/redis';
import { headers } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { action } = await request.json();
    const headersList = await headers();
    const userAgent = headersList.get('user-agent')?.toLowerCase() || '';
    
    // Track the specific action
    await incrementCounter(action);

    // Track device type if it's a download action
    if (action === 'dldBCk') {
      if (userAgent.includes('android')) {
        await incrementCounter('Dandrd');
      } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
        await incrementCounter('Dios');
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking action:', error);
    return NextResponse.json(
      { error: 'Failed to track action' },
      { status: 500 }
    );
  }
} 