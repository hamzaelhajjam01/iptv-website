import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs } from '../../../lib/posts';
import { Metadata } from 'next';

export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);
    if (!post) {
        return { title: 'Post Not Found' };
    }
    return {
        title: `${post.meta.title} | StreamVerse Blog`,
        description: post.meta.excerpt,
        openGraph: {
            title: post.meta.title,
            description: post.meta.excerpt,
            type: 'article',
            url: `https://streamversetv.com/blog/${post.meta.slug}`,
            images: post.meta.featuredImage ? [
                {
                    url: post.meta.featuredImage,
                    width: 1200,
                    height: 630,
                    alt: post.meta.title
                }
            ] : undefined
        },
        twitter: {
            card: 'summary_large_image',
            title: post.meta.title,
            description: post.meta.excerpt,
            images: post.meta.featuredImage ? [post.meta.featuredImage] : undefined
        },
        alternates: {
            canonical: `https://streamversetv.com/blog/${post.meta.slug}`
        }
    };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="bg-section-dark min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative w-full h-[40vh] min-h-[300px] max-h-[500px]">
                {post.meta.featuredImage ? (
                    <Image
                        src={post.meta.featuredImage}
                        alt={post.meta.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-60"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-section-dark via-section-dark/80 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end pb-12">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <Link href="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors font-semibold">
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Blog
                        </Link>
                        
                        {post.meta.category && (
                            <span className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                                {post.meta.category}
                            </span>
                        )}
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            {post.meta.title}
                        </h1>
                        
                        <div className="flex items-center text-gray-400 text-sm space-x-4">
                            {post.meta.author && (
                                <span className="flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    {post.meta.author}
                                </span>
                            )}
                            {post.meta.date && (
                                <span className="flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {new Date(post.meta.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 max-w-4xl mt-8">
                <div className="bg-card-dark rounded-2xl p-8 md:p-12 border border-gray-800 shadow-2xl">
                    <div 
                        className="prose prose-invert prose-lg max-w-none prose-headings:text-blue-400 prose-a:text-blue-500 hover:prose-a:text-blue-400 prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                    />
                </div>
                
                {/* Call to Action at the bottom of the post */}
                <div className="mt-12 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-2xl p-8 border border-blue-500/30 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to cut the cord?</h3>
                    <p className="text-gray-300 mb-6">Get access to 50,000+ channels and 140,000+ VODs today.</p>
                    <Link href="/pricing" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                        View Pricing Plans
                    </Link>
                </div>
            </div>
        </article>
    );
}
