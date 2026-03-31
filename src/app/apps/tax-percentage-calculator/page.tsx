import App from "@/components/Page";
import { Metadata } from "next";
import TaxRateCalculator from "./taxRateCalculator";
import Info from "./info.mdx";

export default function TaxRatePage() {
  return (
    <App {...pageProps}>
      <TaxRateCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Tax Rate Calculator – Calculate Your Effective Tax Rate",
  title: "Tax Rate Calculator",
  description:
    "Calculate your effective tax rate based on your net salary and taxes paid. Also see annual gross income and total taxes.",
  instructions:
    "Enter your monthly net salary and taxes paid. The calculator shows gross salary, tax rate, and annual figures.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
