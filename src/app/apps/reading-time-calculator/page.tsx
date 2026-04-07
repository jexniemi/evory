import { Metadata } from "next";
import Page from "@/components/Page";
import { generateAppMetadata, getAppRoute } from "@/utils/seo";
import ReadingTimeCalculator from "./readingTimeCalculator";
import Info from "./info.mdx";

const route = getAppRoute(import.meta.url);

export const metadata: Metadata = generateAppMetadata(
  "Reading Time Calculator – Free Online Estimate | ewory.com",
  "Estimate how long it takes to read or speak any text. Paste your content and get reading time, word count, and text statistics.",
  route
);

export default function ReadingTimeCalculatorPage() {
  return (
    <Page
      title="Reading Time Calculator"
      description="Paste your text to estimate reading time, speaking time, and get detailed text statistics."
      instructions=""
      Info={Info}
    >
      <ReadingTimeCalculator />
    </Page>
  );
}
