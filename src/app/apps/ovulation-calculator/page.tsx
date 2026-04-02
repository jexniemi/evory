import App from "@/components/Page";
import { Metadata } from "next";
import OvulationCalculator from "./ovulationCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function OvulationCalculatorPage() {
  return (
    <App {...pageProps}>
      <OvulationCalculator />
    </App>
  );
}

const pageProps = {
  title: "Ovulation Calculator",
  seoTitle: "Ovulation Calculator – Fertile Window & Cycle Tracker | ewory.com",
  description:
    "Calculate your ovulation date and fertile window based on your cycle length. Free online ovulation and fertility calculator.",
  instructions:
    "Enter the day of your cycle (how many days since your period started) and your average cycle length. The calculator shows your ovulation day and fertile window.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
