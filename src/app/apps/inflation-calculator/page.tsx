import Page from "@/components/Page";
import { Metadata } from "next";
import InflationCalculator from "./inflationCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function InflationCalculatorPage() {
  return (
    <Page {...pageProps}>
      <InflationCalculator />
    </Page>
  );
}

const pageProps = {
  route: "inflation-calculator",
  seoTitle: "Inflation Calculator – Purchasing Power Over Time | ewory.com",
  title: "Inflation Calculator",
  description:
    "Calculate how inflation erodes purchasing power over time. See how much more you'll need in the future to match today's dollar value.",
  instructions:
    "Enter an amount, the average annual inflation rate, and the number of years. The calculator shows how much that amount loses in purchasing power and what you'd need in the future to maintain it.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
