import App from "@/components/Page";
import { Metadata } from "next";
import TipCalculator from "./tipCalculator";
import Info from "./info.mdx";

export default function TipCalculatorPage() {
  return (
    <App {...pageProps}>
      <TipCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Tip Calculator - Easily Calculate the Tip to be Paid",
  title: "Tip Calculator",
  description:
    "Easily and accurately calculate the tip using our tip calculator. Enter the bill amount, tip percentage, and the number of people sharing the bill to find out the tip, total amount, and amount per person.",
  instructions:
    "Use the tip calculator to determine how much to tip and how much each person pays for the bill. Enter the bill amount, tip percentage, and the number of people sharing the bill. The calculator will provide you with an accurate estimate of the tip amount, total amount (including the tip), and amount per person.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
