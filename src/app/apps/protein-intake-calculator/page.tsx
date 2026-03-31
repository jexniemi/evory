import Page from "@/components/Page";
import { Metadata } from "next";
import ProteinIntakeCalculator from "./proteinIntakeCalculator";
import Info from "./info.mdx";

export default function ProteinIntakeCalculatorPage() {
  return (
    <Page {...pageProps}>
      <ProteinIntakeCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle:
    "Protein Intake Calculator – Daily Protein Needs Estimator | ewory.com",
  title: "Protein Intake Calculator",
  description:
    "Calculate your daily protein needs based on body weight and activity level. Get per-meal targets and calories from protein instantly.",
  instructions:
    "Enter your body weight in pounds and select your activity level. The calculator estimates your daily protein needs, protein per meal for 3 or 4 meals, and total calories from protein.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
