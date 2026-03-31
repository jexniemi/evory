import App from "@/components/Page";
import { Metadata } from "next";
import TaxBracketCalculator from "./taxBracketCalculator";
import Info from "./info.mdx";

export default function TaxBracketCalculatorPage() {
  return (
    <App {...pageProps}>
      <TaxBracketCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle:
    "Tax Bracket Calculator – 2024 Federal Income Tax Estimator | ewory.com",
  title: "Tax Bracket Calculator",
  description:
    "Estimate your 2024 federal income tax, effective tax rate, and marginal bracket. Free online federal tax bracket calculator for all filing statuses.",
  instructions:
    "Enter your annual income and filing status. The calculator applies 2024 federal tax brackets and the standard deduction to estimate your tax liability.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
