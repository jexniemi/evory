import App from "@/components/Page";
import BMRCalculator from "./bmrCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function BMRCalculatorPage() {
  return (
    <App {...pageProps}>
      <BMRCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle:
    "Calculate Your Basal Metabolic Rate (BMR) | Accurate BMR Calculator",
  title: "Basal Metabolic Rate Calculator",
  description:
    "The Basal Metabolic Rate (BMR) calculator is an easy-to-use tool that helps you determine your daily calorie needs at rest. By entering simple information such as age, gender, weight, and height, the calculator accurately estimates your BMR. This information is useful for weight management, creating nutrition plans, and monitoring overall wellness. Use our calculator to optimize your diet and exercise habits to achieve your goals. Start now and take the first step towards a healthier life!",
  instructions:
    "The Basal Metabolic Rate (BMR) calculator is an easy-to-use tool that helps you determine your daily calorie needs at rest. By entering simple information such as age, gender, weight, and height, the calculator accurately estimates your BMR. This information is useful for weight management, creating nutrition plans, and monitoring overall wellness. Use our calculator to optimize your diet and exercise habits to achieve your goals. Start now and take the first step towards a healthier life!",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
