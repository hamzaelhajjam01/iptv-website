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
    <nav className="mb-8 p-6 bg-card-dark rounded-xl border border-gray-700" aria-label="Table of Contents">
      <h2 className="text-xl font-bold mb-4 text-white" id="table-of-contents">Table of Contents</h2>
      <ol className="space-y-2 list-none">
        {headings.map((heading, index) => {
          // Calculate indentation based on heading level
          // level 2 = no indent, level 3 = 1rem, level 4 = 2rem, etc.
          const indent = heading.level === 2 ? 0 : (heading.level - 2) * 1;
          
          return (
            <li
              key={heading.slug || index}
              style={{ marginLeft: `${indent}rem` }}
              className="leading-relaxed"
            >
              <a
                href={`#${heading.slug}`}
                onClick={(e) => handleScroll(e, heading.slug)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 inline-block py-1"
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
