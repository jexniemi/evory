import App from "@/components/Page";
import { Metadata } from "next";
import StockProfitCalculator from "./stockProfitCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function StockProfitCalculatorPage() {
  return (
    <App {...pageProps}>
      <StockProfitCalculator />
    </App>
  );
}

const pageProps = {
  title: "Stock Profit Calculator",
  seoTitle: "Stock Profit Calculator – Calculate Stock Gain, Loss & ROI | ewory.com",
  description:
    "Calculate stock profit or loss from buy price, number of shares, and sell price. See total invested, total received, and ROI percentage.",
  instructions:
    "Enter the buy price per share, number of shares, and sell price per share. The calculator shows profit or loss, ROI, total invested, and total received.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
