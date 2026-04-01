import App from "@/components/Page";
import { Metadata } from "next";
import RoiCalculator from "./roiCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function RoiPage() {
  return (
    <App {...pageProps}>
      <RoiCalculator />
    </App>
  );
}

const pageProps = {
  route: "investment-return-calculator",
  seoTitle: "Investment Return Calculator – Calculate ROI and annual return",
  title: "Investment Return Calculator",
  description:
    "Calculate your investment return percentage (ROI) and annual return (CAGR). Enter initial investment, current value and investment time – get profit, total return and annualized return percentage.",
  instructions:
    "Enter the initial investment value, current value or sale price and investment time. The calculator shows profit in euros, total return percentage and annual return.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
