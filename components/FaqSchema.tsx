import React from 'react';

const FAQSchema: React.FC = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best IPTV subscription service in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "StreamVerse is rated as the top IPTV subscription service in 2026, offering 50,000+ live channels, 4K sports coverage, and a massive library of VOD content with stable, buffer-free servers."
        }
      },
      {
        "@type": "Question",
        "name": "Can I watch IPTV on multiple devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, StreamVerse IPTV is compatible with all major devices including Smart TVs (Samsung, LG), Firestick, Android boxes, Mag boxes, and smartphones. Our multi-device plans allow simultaneous streaming."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a money-back guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a 24-hour trial period and a satisfaction guarantee. If our service doesn't meet your expectations, our 24/7 support team is available to assist with refunds and technical issues."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to get my login details?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Setup is instant. As soon as your subscription is confirmed, you will receive your login credentials via email and WhatsApp, allowing you to start watching within minutes."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
};

export default FAQSchema;
