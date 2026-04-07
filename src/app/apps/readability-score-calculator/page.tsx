import Page from "@/components/Page";
import { Metadata } from "next";
import ReadabilityScoreCalculator from "./readabilityScoreCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function ReadabilityScoreCalculatorPage() {
  return (
    <Page {...pageProps}>
      <ReadabilityScoreCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle:
    "Readability Score Calculator – Flesch-Kincaid & Fog Index | ewory.com",
  title: "Readability Score Calculator",
  description:
    "Check your text's readability with Flesch Reading Ease, Flesch-Kincaid Grade, and Gunning Fog Index. Free online readability analyzer.",
  instructions:
    "Paste or type your text to instantly see readability scores including Flesch Reading Ease, grade level, and Gunning Fog Index.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
