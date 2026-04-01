import App from "@/components/Page";
import { Metadata } from "next";
import MortgageCalculator from "./mortgageCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function MortgageCalculatorPage() {
  return (
    <App {...pageProps}>
      <MortgageCalculator />
    </App>
  );
}

const pageProps = {
  route: "mortgage-calculator",
  seoTitle: "Mortgage Calculator – Free Monthly Payment Estimator | ewory.com",
  title: "Mortgage Calculator",
  description:
    "Calculate monthly mortgage payments, total interest, and total cost. Compare rates and loan terms. Free online mortgage payment calculator.",
  instructions:
    "Enter the home price, down payment percentage, interest rate, and loan term. The calculator shows your monthly payment, total interest, and total cost.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
