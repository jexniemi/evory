import App from "@/components/Page";
import { Metadata } from "next";
import SwimmingPoolVolumeCalculator from "./swimmingPoolVolumeCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function SwimmingPoolVolumeCalculatorPage() {
  return (
    <App {...pageProps}>
      <SwimmingPoolVolumeCalculator />
    </App>
  );
}

const pageProps = {
  title: "Swimming Pool Volume Calculator",
  seoTitle: "Swimming Pool Volume Calculator – Gallons & Liters | ewory.com",
  description:
    "Calculate your swimming pool volume in US gallons and liters from length, width, and average depth. Essential for chemical dosing and water care.",
  instructions:
    "Enter the pool length, width, and average depth in feet. The calculator shows pool volume in US gallons, liters, and cubic feet.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
