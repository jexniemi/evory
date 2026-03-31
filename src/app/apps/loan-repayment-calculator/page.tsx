import App from "@/components/Page";
import { Metadata } from "next";
import LoanCalculator from "./loanCalculator";
import Info from "./info.mdx";

export default function LoanPage() {
  return (
    <App {...pageProps}>
      <LoanCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle:
    "Loan Repayment Calculator – Calculate monthly payment and interest",
  title: "Loan Repayment Calculator",
  description:
    "Calculate loan monthly payment, total costs and interest expenses. Enter loan amount, interest rate and loan term – see exact monthly payment and how much you pay in interest.",
  instructions:
    "Enter loan amount, annual interest rate and loan term in years. The calculator shows monthly payment, interest costs, total payment and payback ratio.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
