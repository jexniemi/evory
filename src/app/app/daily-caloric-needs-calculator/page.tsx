import App from "@/components/Page";
import DailyCaloriesCalculator from "./dailyCaloriesCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function DailyCaloriesCalculatorPage() {
  return (
    <App {...pageProps}>
      <DailyCaloriesCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle:
    "Calculate Your Daily Caloric Needs | Easy and Accurate Daily Caloric Needs Calculator",
  title: "Daily Caloric Needs Calculator",
  description:
    "Welcome to our Daily Caloric Needs Calculator! This convenient tool helps you calculate your daily calorie requirements based on your age, gender, weight, height, and activity level. Whether you're aiming for weight loss, weight maintenance, or muscle gain, our calculator provides an accurate estimate of the calories you need. Enter your information for a personalized recommendation to help you reach your goals.",
  instructions:
    "Welcome to our Daily Caloric Needs Calculator! This handy tool helps you estimate your daily caloric needs based on your age, gender, weight, height, and activity level. Whether your goal is weight loss, maintenance, or muscle growth, our calculator gives you a clear estimate of the calories required. Simply enter your information to receive a personalized recommendation to achieve your goals.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
