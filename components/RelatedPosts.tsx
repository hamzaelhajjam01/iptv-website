import React from 'react';
import { getAllPostsMeta, PostMeta } from '../lib/posts';
import RelatedCarousel from '@/components/RelatedCarousel';

const RelatedPosts: React.FC<{ currentSlug: string; category?: string }> = async ({ currentSlug, category }) => {
  const all = await getAllPostsMeta();
  const related = all.filter(p => p.slug !== currentSlug && p.category === category).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 mb-20">
      <h3 className="text-2xl font-bold mb-6">Related posts</h3>
      <RelatedCarousel posts={related as PostMeta[]} />
    </section>
  );
};

export default RelatedPosts;
