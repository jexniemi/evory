import { Metadata } from "next";
import Page from "@/components/Page";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";
import ReadingTimeCalculator from "./readingTimeCalculator";
import Info from "./info.mdx";

const route = getAppRoute(import.meta.url);

export const metadata: Metadata = generateAppMetadata({
  seoTitle: "Reading Time Calculator – Free Online Estimate | ewory.com",
  title: "Reading Time Calculator",
  description:
    "Estimate how long it takes to read or speak any text. Paste your content and get reading time, word count, and text statistics.",
  route,
});

export default function ReadingTimeCalculatorPage() {
  return (
    <Page
      title="Reading Time Calculator"
      description="Paste your text to estimate reading time, speaking time, and get detailed text statistics."
      instructions="Paste or type any text into the box. Select your reading speed from the dropdown, and the calculator will instantly estimate your reading time, speaking time, and detailed text statistics."
      Info={Info}
    >
      <ReadingTimeCalculator />
    </Page>
  );
}
