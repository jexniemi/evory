import Page from "@/components/Page";
import { Metadata } from "next";
import RetirementCalculator from "./retirementCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function RetirementCalculatorPage() {
  return (
    <Page {...pageProps}>
      <RetirementCalculator />
    </Page>
  );
}

const pageProps = {
  route: "retirement-calculator",
  seoTitle:
    "Retirement Calculator – Free Retirement Savings Estimator | ewory.com",
  title: "Retirement Calculator",
  description:
    "Estimate your retirement savings with compound growth. See total balance, investment gains, and monthly income using the 4% rule. Free retirement planner.",
  instructions:
    "Enter your current age, target retirement age, current savings, monthly contribution, and expected annual return. The calculator projects your total savings at retirement and estimated monthly income.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
