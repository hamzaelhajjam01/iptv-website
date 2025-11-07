"use client";

import React, { useState } from 'react';

interface Props {
  promptTemplate: string; // use {input} and {lang} placeholders
  placeholder?: string;
  buttonText?: string;
}

const mapBrowserLang = (raw?: string) => {
  if (!raw) return 'en';
  const r = raw.slice(0,2).toLowerCase();
  if (r === 'es') return 'es';
  if (r === 'fr') return 'fr';
  return 'en';
};

const GeminiClientForm: React.FC<Props> = ({ promptTemplate, placeholder = '', buttonText = 'Generate' }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) {
      setResult('<p class="text-yellow-400">Please enter a prompt.</p>');
      return;
    }
    setLoading(true);
    setResult('');
    try {
      const lang = mapBrowserLang(navigator.language || (navigator as any).userLanguage || 'en');
      const prompt = promptTemplate.replace('{input}', input).replace('{lang}', lang);
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (data?.text) setResult(data.text);
      else setResult(`<p class="text-red-500">${data?.error || 'No response'}</p>`);
    } catch (err) {
      setResult('<p class="text-red-500">Error generating content.</p>');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-card-dark rounded-lg p-6">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-section-dark text-white p-4 rounded-md h-28 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <button onClick={handleGenerate} disabled={loading} className="mt-4 w-full bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-extrabold py-3 px-8 rounded-lg text-lg cta-button disabled:opacity-50">
        {loading ? 'Generating…' : buttonText}
      </button>
      {result && (
        <div className="gemini-results text-left mt-6 bg-section-dark/50 p-6 rounded-lg border border-gray-700" dangerouslySetInnerHTML={{ __html: result }} />
      )}
    </div>
  );
};

export default GeminiClientForm;
