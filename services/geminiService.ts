
// Re-export server-side Gemini helper to keep legacy import paths working.
// The real implementation lives in ../lib/geminiService.ts and reads
// process.env.GEMINI_API_KEY on the server.
export { callGeminiApi } from '../lib/geminiService';
