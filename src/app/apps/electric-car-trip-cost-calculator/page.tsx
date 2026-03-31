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
  title: "Electric Car Trip Cost Calculator",
  seoTitle:
    "Electric Car Trip Cost Calculator - Calculate Your Trip's Electricity Costs",
  description:
    "Calculate your trip's electric car electricity costs easily and quickly with the electric car trip cost calculator. Enter the trip distance, your vehicle's energy consumption, and electricity price to get an accurate estimate of your trip costs. Save money and plan your trips more efficiently!",
  instructions: `Enter your trip distance in kilometers, your vehicle's average energy consumption (kWh per 100 kilometers), and electricity price per kWh in euros. Press the calculate button and see how easily and quickly our electric car trip cost calculator gives you an accurate estimate of your trip's electricity costs. With these simple instructions, you can plan your trips more efficiently and save money – calculate electricity costs in a flash!`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
