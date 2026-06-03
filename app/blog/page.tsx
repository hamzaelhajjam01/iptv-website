import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPostsMeta } from '../../lib/posts';

export const metadata = {
    title: 'Blog - StreamVerse IPTV',
    description: 'Read the latest news, guides, and tips on IPTV streaming, devices, and entertainment from StreamVerse.',
};

export default async function BlogIndexPage() {
    const posts = await getAllPostsMeta();

    return (
        <section className="py-20 px-6 bg-section-dark min-h-screen">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
                        StreamVerse Blog
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Your ultimate guide to everything IPTV. Discover tutorials, streaming tips, and the latest entertainment news.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
                            <div className="bg-card-dark rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 h-full flex flex-col">
                                {post.featuredImage && (
                                    <div className="relative w-full h-48 overflow-hidden bg-gray-900">
                                        <Image
                                            src={post.featuredImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {post.category && (
                                            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                                {post.category}
                                            </div>
                                        )}
                                    </div>
                                )}
                                <div className="p-6 flex flex-col flex-grow">
                                    {post.date && (
                                        <div className="text-sm text-gray-500 mb-3">
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-400 line-clamp-3 text-sm flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-4 text-blue-500 font-semibold text-sm flex items-center">
                                        Read Article
                                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
