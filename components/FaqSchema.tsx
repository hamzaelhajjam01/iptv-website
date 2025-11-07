import { FAQPage, WithContext } from 'schema-dts';

type FAQ = {
  q: string;
  a: string;
};

type FaqSchemaProps = {
  faqs: FAQ[];
};

export function FaqSchema({ faqs }: FaqSchemaProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  const mainEntity = faqs.map(faq => ({
    '@type': 'Question' as const,
    'name': faq.q,
    'acceptedAnswer': {
      '@type': 'Answer' as const,
      'text': faq.a
    }
  }));

  const jsonLd: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': mainEntity
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
