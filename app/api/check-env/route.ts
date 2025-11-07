// app/api/check-env/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;
  const isSet = !!apiKey;
  const apiKeyLength = apiKey ? apiKey.length : 0;
  const firstChars = apiKey ? apiKey.substring(0, 4) : null;
  const lastChars = apiKey ? apiKey.substring(apiKey.length - 4) : null;

  return NextResponse.json({
    isSet,
    apiKeyLength,
    firstChars,
    lastChars,
  });
}
