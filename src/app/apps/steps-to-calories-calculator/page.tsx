import App from "@/components/Page";
import { Metadata } from "next";
import StepsToCaloriesCalculator from "./stepsToCaloriesCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function StepsToCaloriesCalculatorPage() {
  return (
    <App {...pageProps}>
      <StepsToCaloriesCalculator />
    </App>
  );
}

const pageProps = {
  title: "Steps to Calories Calculator",
  seoTitle:
    "Steps to Calories Calculator – How Many Calories Do Steps Burn? | ewory.com",
  description:
    "Convert steps to calories burned. Enter your step count, weight, and pace to estimate calories burned walking and your distance covered.",
  instructions:
    "Enter the number of steps, your body weight, and your walking pace. The calculator estimates calories burned, distance covered, and time spent walking.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
