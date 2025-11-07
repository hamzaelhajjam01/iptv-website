import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '../../../lib/posts';
import RelatedPosts from '../../../components/RelatedPosts';
import Breadcrumbs from '../../../components/Breadcrumbs';
import BackToTopButton from '../../../components/BackToTopButton';
import SocialShareButtons from '../../../components/SocialShareButtons';
import AuthorBio from '../../../components/AuthorBio';
import { TableOfContents } from '../../../components/TableOfContents';
import { Accordion } from '../../../components/Accordion';
import { FaqSchema } from '../../../components/FaqSchema';

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props) {
  const result = await getPostBySlug(params.slug);
  if (!result) {
    return { title: 'Not Found' } as any;
  }
  const { meta } = result;
  const SITE_URL = process.env.SITE_URL || 'https://streamversetv.com';
  const postUrl = `${SITE_URL.replace(/\/$/, '')}/blog/${meta.slug}`;
  // Use the pre-generated Open Graph image from our responsive image workflow
  const ogPath = `/images/blog/${meta.slug}/${meta.slug}-og.jpg`;
  const ogImageUrl = `${SITE_URL.replace(/\/$/, '')}${ogPath}`;

  return {
    title: meta.title,
    description: meta.excerpt,
    alternates: { canonical: postUrl },
    openGraph: {
      title: meta.title,
      description: meta.excerpt,
      url: postUrl,
      type: 'article',
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.excerpt,
      images: [ogImageUrl],
    },
  } as any;
}

const PostPage = async ({ params }: Props) => {
  const result = await getPostBySlug(params.slug);
  if (!result) return notFound();
  const { meta, contentHtml, headings, faqs } = result as any;
  const SITE_URL = process.env.SITE_URL || 'https://streamversetv.com';
  const postUrl = `${SITE_URL.replace(/\/$/, '')}/blog/${meta.slug}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.excerpt,
    author: meta.author || 'StreamVerse',
    datePublished: meta.date,
    image: meta.featuredImage || undefined,
    url: postUrl,
  };

  return (
    <>
      {/* Add FAQ Schema to head */}
      <FaqSchema faqs={faqs} />
      
      <article className="prose prose-invert max-w-prose">
        <Breadcrumbs category={meta.category} postTitle={meta.title} />
        {/* JSON-LD Article Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

        <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
        <div className="mb-4">
          <SocialShareButtons url={postUrl} title={meta.title} />
        </div>
        {meta.date && <p className="text-sm text-gray-400 mb-6">{new Date(meta.date).toLocaleDateString()}</p>}
        {meta.featuredImage && (
          <div className="w-full mb-6 rounded overflow-hidden">
            <Image
              src={meta.featuredImage}
              alt={meta.title}
              width={1600}
              height={900}
              sizes="100vw"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        {/* Table of Contents */}
        <TableOfContents headings={headings} />

        {/* Main Content */}
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

        {/* FAQ Section */}
        {faqs && faqs.length > 0 && (
          <div className="mt-12 not-prose">
            <h2 className="text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            <Accordion items={faqs} />
          </div>
        )}

        <AuthorBio />
      </article>

      <div className="mt-12">
        <RelatedPosts currentSlug={meta.slug} category={meta.category} />
      </div>
      
      <BackToTopButton />
    </>
  );
};

export default PostPage;
