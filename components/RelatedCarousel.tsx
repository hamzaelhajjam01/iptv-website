"use client";

import React, { useRef } from 'react';
import PostCard from './PostCard';
import { PostMeta } from '../lib/posts';

type Props = { posts: PostMeta[] };

const RelatedCarousel: React.FC<Props> = ({ posts }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = Math.round(el.clientWidth * 0.9) * (dir === 'left' ? -1 : 1);
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Scroll container - keep native scrollbar for usability */}
      <div
        ref={scrollerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4"
        role="region"
        aria-label="Related posts carousel"
      >
        {posts.map((post) => (
          <div key={post.slug} className="flex-none w-11/12 lg:w-2/5 snap-center">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedCarousel;
