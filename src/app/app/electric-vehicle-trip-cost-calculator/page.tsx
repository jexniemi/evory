import Calculator from "./electricityCostCalculator";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function ElectricCarCalculatorPage() {
  return (
    <Page {...pageProps}>
      <Calculator />
    </Page>
  );
}

const pageProps = {
  title: "Electric Vehicle Trip Cost Calculator",
  seoTitle:
    "Electric Vehicle Trip Cost Calculator - Calculate Your Travel Electricity Costs",
  description:
    "Easily and quickly calculate the electricity costs of your trip with our electric vehicle cost calculator. Enter the distance of your trip, your vehicle's energy consumption, and the electricity price to get an accurate estimate of your travel costs. Save money and plan your trip more efficiently!",
  instructions: `Enter the distance of your trip in miles, your vehicle's average energy consumption (kWh per 100 miles), and the electricity price per kWh in dollars. Press the calculate button and see how easily and quickly our electric vehicle trip cost calculator gives you an accurate estimate of your trip's electricity costs. With these simple instructions, you can plan your trip more efficiently and save money – calculate your electricity costs in no time!`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
