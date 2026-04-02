import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import PageAccent from "./PageAccent";
import { getCategoryNameByRoute } from "@/applications";

export interface PageProps {
  route?: string;
  seoTitle?: string;
  title: string;
  description: string;
  instructions: string;
  children: React.ReactNode;
  additionalInfo?: string[];
  Info?: React.FC;
}

export default function Page({
  route,
  seoTitle,
  title,
  description,
  instructions,
  children,
  additionalInfo,
  Info,
}: PageProps) {
  const pageUrl = route
    ? `https://www.ewory.com/apps/${route}`
    : "https://www.ewory.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: seoTitle || title,
    description,
    url: pageUrl,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Ewory.com",
      url: "https://www.ewory.com",
    },
  };

  /* BreadcrumbList JSON-LD: Home → Category → App */
  const category = route ? getCategoryNameByRoute(route) : null;
  const breadcrumbItems: Array<{
    "@type": string;
    position: number;
    name: string;
    item: string;
  }> = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.ewory.com",
    },
  ];

  if (category) {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: category.categoryName,
      item: `https://www.ewory.com${category.categoryPath}`,
    });
  }

  if (route) {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: breadcrumbItems.length + 1,
      name: title,
      item: pageUrl,
    });
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {route && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData),
          }}
        />
      )}
      <main>
        <Breadcrumbs pageTitle={title} />
        <PageAccent title={title} instructions={instructions} />
        <div>
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100" />
        </div>
        {children}
        {Info && (
          <>
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100" />
            <div className="prose prose-lg max-w-none">
              <Info />
            </div>
            <div className="my-12" />
          </>
        )}
        {additionalInfo && (
          <div>
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100" />
            {additionalInfo.map((text, idx) => {
              if (text.includes("H!")) {
                return (
                  <h1
                    key={text.substring(0, 10) + idx}
                    className="text-2xl mt-10 mb-5"
                  >
                    {text.split("H! ")[1]}
                  </h1>
                );
              }
              if (text.includes("S!")) {
                return (
                  <h2
                    key={text.substring(0, 10) + idx}
                    className="text-xl mt-8 mb-5"
                  >
                    {text.split("S! ")[1]}
                  </h2>
                );
              }
              if (text.includes("B!")) {
                return (
                  <b key={text.substring(0, 10) + idx}>
                    {text.split("B! ")[1]}
                  </b>
                );
              }
              return (
                <p key={text.substring(0, 10) + idx} className="my-5">
                  {text}
                </p>
              );
            })}
          </div>
        )}
      </main>
    </>
  );
}
