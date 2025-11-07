import { GoogleGenAI } from "@google/genai";

// Use GEMINI_API_KEY server-side (set in .env.local)
const API_KEY = process.env.GEMINI_API_KEY;

// Temporary masked fingerprint log to help debug which key the running process loads.
// This logs only the first/last 4 chars (masked) and NEVER prints the full key.
if (API_KEY) {
    try {
        const masked = `${API_KEY.substring(0, 4)}...${API_KEY.substring(API_KEY.length - 4)}`;
        // Use debug level so this can be filtered in production logs; remove this after verification.
        // eslint-disable-next-line no-console
        console.debug('[debug] GEMINI_API_KEY present (masked):', masked);
    } catch (e) {
        // ignore any unexpected errors while masking
    }
} else {
    // eslint-disable-next-line no-console
    console.warn("GEMINI_API_KEY for Gemini is not set in environment variables. AI features will not work.");
}

// Instantiate the client lazily to avoid bundling it into client bundles.
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

// Structured provider error class so the API route can return clear JSON to clients.
export class ProviderError extends Error {
    status?: number;
    code?: string;
    details?: any;
    constructor(message: string, status?: number, code?: string, details?: any) {
        super(message);
        this.name = 'ProviderError';
        this.status = status;
        this.code = code;
        this.details = details;
    }
}

export const callGeminiApi = async (prompt: string): Promise<string> => {
    if (!ai) {
        return Promise.reject(new ProviderError('API key is not configured.', 400, 'API_KEY_MISSING'));
    }
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        return (response as any).text || '';
    } catch (error: any) {
        console.error("Error calling Gemini API:", error);

        // Attempt to extract structured information from the provider error.
        let providerMessage = error?.message || 'Unknown provider error';
        let status: number | undefined = undefined;
        let code: string | undefined = undefined;
        let details: any = undefined;

        // Try common shapes: parsed JSON in message, or error.error object, or response.data
        try {
            // Some libraries embed the provider body in the error message as JSON
            if (typeof providerMessage === 'string' && providerMessage.trim().startsWith('{')) {
                const parsed = JSON.parse(providerMessage);
                if (parsed?.error) {
                    providerMessage = parsed.error.message || providerMessage;
                    status = parsed.error.code || parsed.error.status || status;
                    code = parsed.error?.details?.[0]?.reason || parsed.error.code || code;
                    details = parsed.error;
                }
            }
        } catch (parseErr) {
            // ignore parse errors
        }

        // Some SDKs attach the raw response under error.response or error.body
        if (!details && error?.response?.data) {
            details = error.response.data;
            providerMessage = details?.error?.message || providerMessage;
            status = details?.error?.code || status;
            code = details?.error?.details?.[0]?.reason || code;
        }

        // Fallback: if error has a numeric status
        if (!status && typeof error?.status === 'number') {
            status = error.status;
        }

        throw new ProviderError(String(providerMessage), status, code, details);
    }
};
