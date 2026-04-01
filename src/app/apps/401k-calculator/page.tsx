import App from "@/components/Page";
import { Metadata } from "next";
import RetirementContributionCalculator from "./retirementContributionCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function RetirementCalculatorPage() {
  return (
    <App {...pageProps}>
      <RetirementContributionCalculator />
    </App>
  );
}

const pageProps = {
  route: "401k-calculator",
  seoTitle: "401(k) Calculator – Free Retirement Savings Estimator | ewory.com",
  title: "401(k) Calculator",
  description:
    "Estimate your 401(k) balance at retirement. Calculate contributions, employer match, and compound growth. Free 401(k) retirement savings calculator.",
  instructions:
    "Enter your age, salary, contribution rate, employer match, and expected return. The calculator projects your 401(k) balance at retirement.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
