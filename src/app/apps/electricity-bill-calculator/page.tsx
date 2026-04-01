import App from "@/components/Page";
import { Metadata } from "next";
import ElectricityCalculator from "./electricityCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function ElectricityPage() {
  return (
    <App {...pageProps}>
      <ElectricityCalculator />
    </App>
  );
}

const pageProps = {
  route: "electricity-bill-calculator",
  seoTitle: "Electricity Bill Calculator - Calculate Electricity Consumption",
  title: "Electricity Bill Calculator",
  description:
    "Calculate your electricity bill easily knowing the consumption and electricity price.",
  instructions:
    "Enter electricity consumption in kWh and electricity price in $/kWh. The calculator shows the electricity bill amount.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
