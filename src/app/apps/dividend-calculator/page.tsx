import App from "@/components/Page";
import { Metadata } from "next";
import DividendCalculator from "./dividendCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function DividendCalculatorPage() {
  return (
    <App {...pageProps}>
      <DividendCalculator />
    </App>
  );
}

const pageProps = {
  title: "Dividend Calculator",
  seoTitle: "Dividend Calculator – Estimate Annual Dividend Income | ewory.com",
  description:
    "Calculate annual and monthly dividend income from your investment amount and dividend yield. See total dividends over any time horizon.",
  instructions:
    "Enter the investment amount, annual dividend yield percentage, and number of years. The calculator shows annual income, monthly income, and total dividends.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
