import SEO from "@/components/common/SEO";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

export interface PageProps {
  seoTitle?: string;
  title: string;
  description: string;
  instructions: string;
  children: React.ReactNode;
  Info?: React.FC;
}

/* import { FAQPage, WithContext } from "schema-dts"; */

export default function Page({
  seoTitle,
  title,
  description,
  instructions,
  children,
  Info,
}: PageProps) {
  /*   const questions = additionalInfo?.reduce(
    (acc: Array<string[]>, curr, index) => {
      try {
        if (curr.endsWith("?")) {
          return [...acc, [curr.split("! ")[1], additionalInfo[index + 1]]];
        }
        return [...acc];
      } catch {
        throw new Error("Invalid FAQ format");
      }
    },
    []
  );

  const structuredData: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity:
      (questions &&
        questions.map(([question, answer]) => {
          return {
            "@type": "Question",
            name: question,
            acceptedAnswer: {
              "@type": "Answer",
              text: answer,
            },
          };
        })) ||
      undefined,
    headline: seoTitle || title,
    description,
    author: {
      "@type": "Organization",
      name: "ewory.com",
      url: "https://ewory.com",
    },
    datePublished: "2023-12-10",
    dateModified: "2023-12-28"
  }; */

  return (
    <>
      <SEO title={seoTitle || title} description={description} />
      {/*       {structuredData?.mainEntity && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )} */}
      <main>
        <Breadcrumbs pageTitle={title} />
        <div>
          <h1 className="text-3xl break-all mt-5">{title}</h1>
          <p className="mt-5">{instructions}</p>
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        </div>
        {children}
        {Info && (
          <div className="pb-5">
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <Info />
          </div>
        )}
      </main>
    </>
  );
}
