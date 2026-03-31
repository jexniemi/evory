import Page from "@/components/Page";
import { Metadata } from "next";
import DebtPayoffCalculator from "./debtPayoffCalculator";
import Info from "./info.mdx";

export default function DebtPayoffCalculatorPage() {
  return (
    <Page {...pageProps}>
      <DebtPayoffCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Debt Payoff Calculator – Free Debt Repayment Planner | ewory.com",
  title: "Debt Payoff Calculator",
  description:
    "Calculate how long it takes to pay off debt, total interest paid, and total cost. Plan your debt-free date with this free debt payoff calculator.",
  instructions:
    "Enter your total debt balance, annual interest rate, and monthly payment amount. The calculator shows how many months until payoff and the total interest you will pay.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
