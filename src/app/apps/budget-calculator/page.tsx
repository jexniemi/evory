import App from "@/components/Page";
import { Metadata } from "next";
import BudgetCalculator from "./budgetCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function BudgetCalculatorPage() {
  return (
    <App {...pageProps}>
      <BudgetCalculator />
    </App>
  );
}

const pageProps = {
  title: "Budget Calculator",
  seoTitle: "Budget Calculator – Monthly Budget Planner & Savings Rate | ewory.com",
  description:
    "Calculate your monthly savings, savings rate, and projected annual savings from your income and expenses. Free online budget calculator.",
  instructions:
    "Enter your monthly after-tax income and total monthly expenses. The calculator shows your monthly savings, savings rate percentage, and annual savings.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
