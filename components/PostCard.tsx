"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PostMeta } from '../lib/posts';

const PostCard: React.FC<{ post: PostMeta }> = ({ post }) => {
  return (
    <article className="bg-card-dark rounded-lg overflow-hidden shadow-md">
      {post.featuredImage && (
        <div className="relative w-full h-48">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
        {post.date && <p className="text-sm text-gray-400 mb-2">{new Date(post.date).toLocaleDateString()}</p>}
        <p className="text-gray-300 mb-4">{post.excerpt && post.excerpt.length > 100 ? post.excerpt.substring(0, 100) + '...' : post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Read more
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
