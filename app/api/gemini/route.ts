import { NextResponse } from 'next/server';
import { callGeminiApi, ProviderError } from '../../../lib/geminiService';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt } = body;
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Missing prompt' }, { status: 400 });
    }

    const text = await callGeminiApi(prompt);
    return NextResponse.json({ text });
  } catch (err: any) {
    console.error('API /api/gemini error:', err);

    // If this is a ProviderError, return structured info and an appropriate status.
    if (err instanceof ProviderError) {
      const status = err.status && typeof err.status === 'number' ? err.status : 400;
      return NextResponse.json({
        error: err.message,
        provider: {
          code: err.code || null,
          details: err.details || null,
        },
      }, { status });
    }

    // Fallback: generic server error
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
