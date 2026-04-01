import App from "@/components/Page";
import { Metadata } from "next";
import CalorieCalculator from "./calorieCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function CaloriePage() {
  return (
    <App {...pageProps}>
      <CalorieCalculator />
    </App>
  );
}

const pageProps = {
  route: "daily-calorie-needs-calculator",
  seoTitle: "Daily Calorie Needs Calculator – Calculate Your Calorie Needs",
  title: "Daily Calorie Needs Calculator",
  description:
    "Calculate your daily calorie needs using the Mifflin-St Jeor formula. Select your activity level and get an accurate estimate of maintenance calories plus goals for weight loss and muscle gain.",
  instructions:
    "Enter your information and select your activity level. The calculator will show your daily calorie needs as well as recommended calorie amounts for weight loss and muscle gain.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
