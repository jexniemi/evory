import SEO from "@/components/common/SEO";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import PageAccent from "./PageAccent";

export interface PageProps {
  seoTitle?: string;
  title: string;
  description: string;
  instructions: string;
  children: React.ReactNode;
  additionalInfo?: string[];
  Info?: React.FC;
}

/* import { FAQPage, WithContext } from "schema-dts"; */

export default function Page({
  seoTitle,
  title,
  description,
  instructions,
  children,
  additionalInfo,
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
        <PageAccent title={title} instructions={instructions} />
        <div>
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100" />
        </div>
        {children}
        {Info && (
          <>
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100" />
            <Info />
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
