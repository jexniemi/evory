import App from "@/components/Page";
import { Metadata } from "next";
import BmiCalculator from "./bmiCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function BmiCalculatorPage() {
  return (
    <App {...pageProps}>
      <BmiCalculator />
    </App>
  );
}

const pageProps = {
  route: "bmi-calculator",
  seoTitle: "BMI Calculator – Calculate your body mass index and normal weight range",
  title: "BMI Calculator",
  description:
    "Calculate your body mass index using WHO classification and find the normal weight range based on your height.",
  instructions:
    "Enter your height in centimeters and weight in kilograms. The calculator will show the BMI value, classification, and the lower and upper limits of normal weight.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
