import Page from "@/components/Page";
import CompoundInterestCalculator from "./compoundInterestCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function CompoundInterestCalculatorPage() {
  return (
    <Page {...pageProps}>
      <CompoundInterestCalculator />
    </Page>
  );
}

const pageProps = {
  title: "Compound Interest Calculator",
  seoTitle:
    "Compound Interest Calculator - Easily Calculate Your Investment's Future Value",
  description:
    "Easily calculate the future value of your investment with our compound interest calculator! Enter the initial principal, interest rate, investment duration, and monthly savings amount to see how your investment grows exponentially over time. Use our calculator to plan your savings and investments effectively.",
  instructions: `With this calculator, you can conveniently estimate the future value of your savings or investment, accounting for the compound interest effect. Enter your initial principal, annual interest rate, investment duration in years, and monthly savings amount. Press the calculate button to quickly and easily get an accurate forecast of your investment’s return.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
