import Page from "@/components/Page";
import { Metadata } from "next";
import WaterIntakeCalculator from "./waterIntakeCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function WaterIntakeCalculatorPage() {
  return (
    <Page {...pageProps}>
      <WaterIntakeCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Water Intake Calculator – How Much Water Should I Drink? | ewory.com",
  title: "Water Intake Calculator",
  description:
    "Calculate how much water you should drink daily based on your weight and activity level. Results in ounces, liters, and cups.",
  instructions:
    "Enter your body weight and daily exercise minutes. The calculator estimates your recommended daily water intake.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
