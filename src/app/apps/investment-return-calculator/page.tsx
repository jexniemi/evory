import App from "@/components/Page";
import { Metadata } from "next";
import RoiCalculator from "./roiCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function RoiPage() {
  return (
    <App {...pageProps}>
      <RoiCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Investment Return Calculator – Calculate ROI and annual return",
  title: "Investment Return Calculator",
  description:
    "Calculate your investment return percentage (ROI) and annual return (CAGR). Enter initial investment, current value and investment time – get profit, total return and annualized return percentage.",
  instructions:
    "Enter the initial investment value, current value or sale price and investment time. The calculator shows profit in euros, total return percentage and annual return.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
