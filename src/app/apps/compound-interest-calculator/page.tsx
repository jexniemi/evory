import Page from "@/components/Page";
import CompoundInterestCalculator from "./compoundInterestCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


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
    "Compound Interest Calculator - Calculate Your Investment's Future Value Easily",
  description:
    "Calculate your investment's future value easily with our compound interest calculator! Enter the initial principal, interest rate, investment time, and monthly savings amount, and see how your investment grows exponentially over time. Use our calculator to plan your savings and investments effectively.",
  instructions: `With this calculator, you can easily calculate the future value of your savings or investment, taking into account the compound interest phenomenon. Enter your initial principal, annual interest rate, investment time in years, and monthly savings amount. Press the calculate button and see how easily and quickly our compound interest calculator gives you an accurate estimate of your investment's return.`,
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
