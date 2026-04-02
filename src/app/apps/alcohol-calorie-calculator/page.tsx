import App from "@/components/Page";
import { Metadata } from "next";
import AlcoholCalorieCalculator from "./alcoholCalorieCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function AlcoholCalorieCalculatorPage() {
  return (
    <App {...pageProps}>
      <AlcoholCalorieCalculator />
    </App>
  );
}

const pageProps = {
  title: "Alcohol Calorie Calculator",
  seoTitle:
    "Alcohol Calorie Calculator – Calories in Beer, Wine & Spirits | ewory.com",
  description:
    "Calculate the calories in your alcoholic drinks. Find out how many calories are in beer, wine, shots and cocktails and how it affects your diet.",
  instructions:
    "Enter the number of beers, wine glasses, shots, and cocktails you drink. The calculator shows total calories, calories from alcohol, and percentage of your daily calorie budget.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
