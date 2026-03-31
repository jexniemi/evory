import Page from "@/components/Page";
import { Metadata } from "next";
import SquareFootageCalculator from "./squareFootageCalculator";
import Info from "./info.mdx";

export default function SquareFootageCalculatorPage() {
  return (
    <Page {...pageProps}>
      <SquareFootageCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle:
    "Square Footage Calculator – Free Online Area Calculator | ewory.com",
  title: "Square Footage Calculator",
  description:
    "Calculate square footage from length and width. Estimate property value with price per square foot. Convert to square meters instantly.",
  instructions:
    "Enter the length and width in feet plus an optional price per square foot. The calculator shows total area in square feet and square meters, and an estimated property value.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
