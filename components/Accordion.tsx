'use client';

import { useState } from 'react';

type FAQ = {
  q: string;
  a: string;
};

type AccordionProps = {
  items: FAQ[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items || items.length === 0) {
    return null;
  }

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-750 transition-colors"
          >
            <span className="font-semibold text-white pr-4">{item.q}</span>
            <svg
              className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-900 border-t border-gray-700">
              <div 
                className="text-gray-300 prose prose-invert prose-sm max-w-none prose-a:text-blue-500 prose-a:underline hover:prose-a:text-blue-400"
                dangerouslySetInnerHTML={{ __html: item.a }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
