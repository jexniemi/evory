import App from "@/components/Page";
import { Metadata } from "next";
import NetCarbCalculator from "./netCarbCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function NetCarbCalculatorPage() {
  return (
    <App {...pageProps}>
      <NetCarbCalculator />
    </App>
  );
}

const pageProps = {
  title: "Net Carb Calculator",
  seoTitle: "Net Carb Calculator – Keto Net Carbs from Total Carbs & Fiber | ewory.com",
  description:
    "Calculate net carbs instantly for keto and low-carb diets. Subtract fiber and sugar alcohols from total carbs. Includes erythritol, xylitol, and maltitol.",
  instructions:
    "Enter total carbohydrates, dietary fiber, and sugar alcohols from the nutrition label. Select the sugar alcohol type for accurate keto net carb calculation.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
