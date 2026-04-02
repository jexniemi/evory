import Page from "@/components/Page";
import { Metadata } from "next";
import GasMileageCalculator from "./gasMileageCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function GasMileageCalculatorPage() {
  return (
    <Page {...pageProps}>
      <GasMileageCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Gas Mileage Calculator – Calculate MPG and Fuel Cost | ewory.com",
  title: "Gas Mileage Calculator",
  description:
    "Calculate your vehicle's miles per gallon (MPG), cost per mile, and total fuel cost. Free gas mileage calculator for tracking fuel economy.",
  instructions:
    "Enter the total miles driven, gallons of fuel used, and the gas price per gallon. The calculator shows your MPG, cost per mile, and total fuel cost.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
