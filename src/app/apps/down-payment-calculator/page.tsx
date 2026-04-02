import App from "@/components/Page";
import { Metadata } from "next";
import DownPaymentCalculator from "./downPaymentCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function DownPaymentCalculatorPage() {
  return (
    <App {...pageProps}>
      <DownPaymentCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Down Payment Calculator – Home Savings Planner | ewory.com",
  title: "Down Payment Calculator",
  description:
    "Calculate how much you need for a down payment and how long it will take to save. Plan your home purchase with our free down payment calculator.",
  instructions:
    "Enter the home price, your target down payment percentage, current savings, and monthly savings. The calculator shows your down payment target and timeline.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
