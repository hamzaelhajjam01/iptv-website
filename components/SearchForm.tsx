"use client";

import { useSearchParams } from "next/navigation";

export default function SearchForm() {
  const searchParams = useSearchParams();
  const currentQ = searchParams.get("q") || "";
  const currentCategory = searchParams.get("category") || "";

  return (
    <form action="/blog" method="get" className="bg-card-dark rounded-xl p-4">
      <label htmlFor="q" className="sr-only">Search</label>
      <div className="flex gap-2">
        <input
          id="q"
          name="q"
          type="search"
          placeholder="Search articles..."
          defaultValue={currentQ}
          className="flex-1 bg-[#050a19] text-gray-100 placeholder-gray-500 rounded-lg px-3 py-2 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        {currentCategory && (
          <input type="hidden" name="category" value={currentCategory} />
        )}
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 rounded-lg">
          Search
        </button>
      </div>
    </form>
  );
}
