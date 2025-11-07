'use client';

// This is the type for the headings you get from `lib/posts.ts`
interface Heading {
  level: number;
  text: string;
  slug: string;
}

export function TableOfContents({ headings }: { headings: Heading[] }) {
  if (!headings || headings.length === 0) {
    return null; // Don't render if no headings
  }

  // THIS IS THE FIX.
  // This function handles the scroll manually.
  const handleScroll = (e: React.MouseEvent, slug: string) => {
    e.preventDefault(); // Stop the browser's default link behavior

    const targetElement = document.getElementById(slug);

    if (targetElement) {
      // Manually scroll the element into view
      targetElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });

      // (Optional but good) Update the URL hash
      window.history.pushState(null, '', `#${slug}`);
    }
  };

  return (
    <nav className="mb-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
      <h2 className="text-lg font-bold mb-3 text-white">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.slug}
            className={heading.level === 3 ? 'ml-4' : ''}
          >
            <a
              href={`#${heading.slug}`}
              onClick={(e) => handleScroll(e, heading.slug)}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
