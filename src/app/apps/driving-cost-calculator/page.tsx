import App from "@/components/Page";
import { Metadata } from "next";
import FuelCostCalculator from "./fuelCostCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function FuelCostPage() {
  return (
    <App {...pageProps}>
      <FuelCostCalculator />
    </App>
  );
}

const pageProps = {
  route: "driving-cost-calculator",
  seoTitle: "Driving Cost Calculator – Calculate Fuel Costs and Annual Costs",
  title: "Driving Cost Calculator",
  description:
    "Calculate the fuel cost of a trip, cost per kilometer, and annual costs. Enter the distance, consumption, fuel price, and annual kilometers.",
  instructions:
    "Enter the trip distance, car consumption, fuel price per liter, and estimated annual kilometers. The calculator shows the trip cost, required fuel amount, cost per kilometer, and annual costs.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
