import Page from "@/components/Page";
import { Metadata } from "next";
import BodyFatCalculator from "./bodyFatCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function BodyFatCalculatorPage() {
  return (
    <Page {...pageProps}>
      <BodyFatCalculator />
    </Page>
  );
}

const pageProps = {
  route: "body-fat-calculator",
  seoTitle:
    "Body Fat Calculator – US Navy Formula Body Fat Estimator | ewory.com",
  title: "Body Fat Calculator",
  description:
    "Estimate your body fat percentage using the US Navy formula. Calculate fat mass, lean mass, and body fat category from simple measurements.",
  instructions:
    "Select your gender, then enter your weight in pounds, waist circumference, neck circumference, and height in inches. The calculator uses the US Navy body fat formula to estimate your body fat percentage and composition.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
