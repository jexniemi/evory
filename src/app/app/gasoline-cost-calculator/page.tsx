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
    "Easily and quickly calculate your trip's fuel costs with our fuel cost calculator. Enter the length of your trip, fuel consumption, and fuel price to get an accurate estimate of your travel expenses. Save money and plan your trip more efficiently!",
  instructions: `Enter the length of your trip in miles, your vehicle's average fuel consumption (gallons per 100 miles), and the current fuel price per gallon in dollars. Press the calculate button and see how easily and quickly our fuel cost calculator provides you with an accurate estimate of your trip's fuel costs. With these simple instructions, you can plan your trip more efficiently and save money – calculate your fuel costs in no time!`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
