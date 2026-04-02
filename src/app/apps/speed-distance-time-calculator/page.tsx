import App from "@/components/Page";
import { Metadata } from "next";
import SpeedDistanceTimeCalculator from "./speedDistanceTimeCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function SpeedDistanceTimeCalculatorPage() {
  return (
    <App {...pageProps}>
      <SpeedDistanceTimeCalculator />
    </App>
  );
}

const pageProps = {
  title: "Speed Distance Time Calculator",
  seoTitle: "Speed Distance Time Calculator – Solve for Any Variable | ewory.com",
  description:
    "Calculate speed, distance, or time using the speed-distance-time triangle. Free online physics calculator for travel, running, cycling, and more.",
  instructions:
    "Select what you want to calculate, then enter the two known values. Switch between calculating speed, distance, or time with one click.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
