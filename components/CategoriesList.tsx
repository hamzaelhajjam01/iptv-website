"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
  categories: string[];
};

function normalize(str: string | null | undefined) {
  return (str || "").trim().toLowerCase();
}

export default function CategoriesList({ categories }: Props) {
  const searchParams = useSearchParams();
  const currentCategory = normalize(searchParams.get("category"));
  const currentQ = searchParams.get("q");

  const itemClasses = (active: boolean) =>
    [
      "block",
      "transition-colors",
      active
        ? "text-white font-semibold border-l-2 border-blue-600 pl-3 -ml-3"
        : "text-gray-300 hover:text-white",
    ].join(" ");

  return (
    <ul className="space-y-2">
      <li>
        <Link
          href={currentQ ? `/blog?q=${encodeURIComponent(currentQ)}` : "/blog"}
          className={itemClasses(currentCategory === "")}
        > 
          All categories
        </Link>
      </li>
      {categories.map((cat) => {
        const active = normalize(cat) === currentCategory;
        const href = `/blog?category=${encodeURIComponent(cat)}${currentQ ? `&q=${encodeURIComponent(currentQ)}` : ""}`;
        return (
          <li key={cat}>
            <Link href={href} className={itemClasses(active)}>
              {cat}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
