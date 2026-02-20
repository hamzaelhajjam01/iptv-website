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
    // Log the full error on the server side for debugging
    console.error('API /api/gemini error:', err);

    // If this is a ProviderError, return an appropriate status but a generic safe message.
    if (err instanceof ProviderError) {
      const status = err.status && typeof err.status === 'number' ? err.status : 400;
      return NextResponse.json({
        error: 'AI service is currently unavailable or misconfigured. Please try again later.',
      }, { status });
    }

    // Fallback: generic server error
    return NextResponse.json({ error: 'An unexpected error occurred with the AI service.' }, { status: 500 });
  }
}
