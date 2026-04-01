import Page from "@/components/Page";
import { Metadata } from "next";
import UnitPriceCalculator from "./unitPriceCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function UnitPriceCalculatorPage() {
  return (
    <Page {...pageProps}>
      <UnitPriceCalculator />
    </Page>
  );
}

const pageProps = {
  route: "unit-price-calculator",
  seoTitle:
    "Unit Price Calculator – Compare Product Prices Per Unit | ewory.com",
  title: "Unit Price Calculator",
  description:
    "Compare two products by unit price to find the better deal. Calculate price per ounce, savings per unit, and which product offers more value.",
  instructions:
    "Enter the price and quantity for two products. The calculator compares unit prices and shows which product is the better deal and how much you save per unit.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
