interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <details
            key={idx}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg"
          >
            <summary className="collapse-title font-semibold text-base">
              {item.q}
            </summary>
            <div className="collapse-content text-sm leading-relaxed">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
