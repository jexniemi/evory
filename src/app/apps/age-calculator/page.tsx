import App from "@/components/Page";
import { Metadata } from "next";
import AgeCalculator from "./ageCalculator";
import Info from "./info.mdx";

export default function AgeCalculatorPage() {
  return (
    <App {...pageProps}>
      <AgeCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Age Calculator - Calculate Your Age Accurately from Birthdate",
  title: "Age Calculator",
  description:
    "Calculate your age accurately in years, months, and days. Enter your birthdate and find out your exact age.",
  instructions:
    "Select your birthdate, month, and year. The calculator will show your exact age in years, months, and days.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
