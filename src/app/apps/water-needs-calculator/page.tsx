import App from "@/components/Page";
import { Metadata } from "next";
import WaterIntakeCalculator from "./waterIntakeCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function WaterIntakeCalculatorPage() {
  return (
    <App {...pageProps}>
      <WaterIntakeCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Water Needs Calculator - Calculate Your Daily Water Intake",
  title: "Water Needs Calculator",
  description:
    "Calculate your daily water needs based on weight and activity level. Find out how much water you should drink per day.",
  instructions:
    "Enter your weight and select your activity level. The calculator estimates how much water you should drink daily.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
