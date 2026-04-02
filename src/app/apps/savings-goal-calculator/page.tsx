import App from "@/components/Page";
import { Metadata } from "next";
import SavingsGoalCalculator from "./savingsGoalCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function SavingsGoalCalculatorPage() {
  return (
    <App {...pageProps}>
      <SavingsGoalCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Savings Goal Calculator - How Long Will Saving Take?",
  title: "Savings Goal Calculator",
  description:
    "Calculate how long it takes to reach your savings goal. Consider monthly savings amount and expected return.",
  instructions:
    "Enter the savings goal in euros, monthly savings amount, and estimated annual return. The calculator tells you how long it takes to reach the goal.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
