import React from 'react';

type Props = {
  url: string;
  title: string;
};

export default function SocialShareButtons({ url, title }: Props) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      bg: 'bg-neutral-800 hover:bg-neutral-700',
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bg: 'bg-blue-700 hover:bg-blue-600',
    },
    {
      name: 'Reddit',
      href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      bg: 'bg-orange-600 hover:bg-orange-500',
    },
  ];

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span className="text-sm text-gray-400 mr-2">Share:</span>
      {links.map((l) => (
        <a
          key={l.name}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${l.bg} text-white text-sm font-semibold px-3 py-1.5 rounded-lg`}
        >
          {l.name}
        </a>
      ))}
    </div>
  );
}
