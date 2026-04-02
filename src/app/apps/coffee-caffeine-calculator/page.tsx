import App from "@/components/Page";
import { Metadata } from "next";
import CoffeeCaffeineCalculator from "./coffeeCaffeineCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function CoffeeCaffeineCalculatorPage() {
  return (
    <App {...pageProps}>
      <CoffeeCaffeineCalculator />
    </App>
  );
}

const pageProps = {
  title: "Coffee Caffeine Calculator",
  seoTitle: "Caffeine Calculator – How Much Caffeine Am I Consuming? | ewory.com",
  description:
    "Calculate total daily caffeine intake from espresso, coffee, energy drinks, and tea. See how close you are to the safe daily limit of 400 mg.",
  instructions:
    "Enter the number of espresso shots, cups of coffee, energy drinks, and cups of tea you consume daily. See total caffeine and your percentage of the safe daily limit.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
