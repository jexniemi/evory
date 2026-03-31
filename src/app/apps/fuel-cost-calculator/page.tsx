import Calculator from "./gasCostCalculator";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function GasCostCalculatorPage() {
  return (
    <Page {...pageProps}>
      <Calculator />
    </Page>
  );
}

const pageProps = {
  title: "Fuel Cost Calculator",
  seoTitle: "Fuel Cost Calculator - Calculate Your Trip's Fuel Costs",
  description:
    "Calculate your trip's fuel costs easily and quickly with the fuel cost calculator. Enter the trip distance, fuel consumption, and fuel price to get an accurate estimate of your trip costs. Save money and plan your trips more efficiently!",
  instructions: `Enter your trip distance in kilometers, your vehicle's average fuel consumption (liters per 100 kilometers), and the current fuel price per liter in euros. Press the calculate button and see how easily and quickly our fuel cost calculator gives you an accurate estimate of your trip's fuel costs. With these simple instructions, you can plan your trips more efficiently and save money – calculate fuel costs in a flash!`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
