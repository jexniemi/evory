import App from "@/components/Page";
import { Metadata } from "next";
import CalorieDeficitCalculator from "./calorieDeficitCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function CalorieDeficitCalculatorPage() {
  return (
    <App {...pageProps}>
      <CalorieDeficitCalculator />
    </App>
  );
}

const pageProps = {
  title: "Calorie Deficit Calculator",
  seoTitle: "Calorie Deficit Calculator – Daily Calorie Target for Fat Loss | ewory.com",
  description:
    "Calculate your daily calorie deficit to lose weight at your chosen pace. Enter your TDEE and target weekly weight loss to get your calorie target.",
  instructions:
    "Enter your daily maintenance calories (TDEE) and select your target weekly weight loss. The calculator shows your daily calorie target, deficit size, and estimated time to lose 5 kg.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
