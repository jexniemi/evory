import App from "@/components/Page";
import { Metadata } from "next";
import RothIRACalculator from "./rothIRACalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function RothIRACalculatorPage() {
  return (
    <App {...pageProps}>
      <RothIRACalculator />
    </App>
  );
}

const pageProps = {
  route: "roth-ira-calculator",
  seoTitle:
    "Roth IRA Calculator – Tax-Free Retirement Growth Estimator | ewory.com",
  title: "Roth IRA Calculator",
  description:
    "Calculate your Roth IRA balance at retirement based on age, annual contributions, and expected return. See how tax-free growth compounds over time.",
  instructions:
    "Enter your current age, planned retirement age, annual contribution amount, and expected return rate. The calculator shows your projected balance and how much of it is tax-free growth.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
