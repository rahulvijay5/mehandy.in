import { NextResponse } from 'next/server';
import { getCounters } from '@/lib/redis';

export async function GET() {
  try {
    const counters = await getCounters();
    return NextResponse.json(counters);
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
} 