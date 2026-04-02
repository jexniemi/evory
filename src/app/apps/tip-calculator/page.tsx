import App from "@/components/Page";
import { Metadata } from "next";
import TipCalculator from "./tipCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function TipCalculatorPage() {
  return (
    <App {...pageProps}>
      <TipCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Tip Calculator – Calculate Tip Amount Easily",
  title: "Tip Calculator",
  description:
    "Calculate tips easily and accurately. Enter the bill amount, tip percentage, and number of people splitting the bill to get the tip, total, and amount per person.",
  instructions:
    "Enter the bill amount, tip percentage, and number of people sharing the bill. The calculator gives you the exact tip amount, total bill (including tip), and the amount per person.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
