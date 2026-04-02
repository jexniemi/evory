import App from "@/components/Page";
import BMRCalculator from "./bmrCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function BMRCalculatorPage() {
  return (
    <App {...pageProps}>
      <BMRCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle:
    "Basal Metabolic Rate Calculator (BMR) – Calculate Resting Calories",
  title: "Basal Metabolic Rate Calculator",
  description:
    "Calculate your basal metabolic rate (BMR) using the Harris-Benedict formula. Enter age, gender, weight, and height – get your BMR and an estimate of daily calorie needs at different activity levels.",
  instructions:
    "Enter your details below. The calculator calculates your basal metabolic rate using the Harris-Benedict formula and shows daily calorie needs at three different activity levels.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
