import { NextRequest, NextResponse } from 'next/server';
import { notifyIndexNow } from '../../../lib/indexnow';

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('x-indexnow-secret');
    const expectedSecret = process.env.INDEXNOW_SECRET;

    if (!expectedSecret || authHeader !== expectedSecret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { urls } = body;

    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: 'Missing or invalid "urls" field in body.' }, { status: 400 });
    }

    const status = await notifyIndexNow(urls);

    return NextResponse.json({ success: true, status });
  } catch (error) {
    console.error('[IndexNow API] Error:', error);
    // Return 200 even on error so caller (like build script) doesn't strictly fail
    return NextResponse.json({ success: false, error: 'Internal Error' }, { status: 200 });
  }
}

export async function GET(request: Request) {
  return NextResponse.json({ message: "IndexNow API is active and ready to receive POST requests." }, { status: 200 });
}
