import App from "@/components/Page";
import { Metadata } from "next";
import PricePerSqmCalculator from "./pricePerSqmCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function PricePerSqmPage() {
  return (
    <App {...pageProps}>
      <PricePerSqmCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle:
    "Price Per Square Foot Calculator - Calculate Apartment Price Per Square Foot",
  title: "Price Per Square Foot Calculator",
  description:
    "Easily calculate the price per square foot of an apartment. Enter the apartment's price and area, and the calculator will tell you the price per square meter.",
  instructions:
    "Enter the apartment's sale price, area in square meters, and possible housing company loan share. The calculator calculates the debt-free price per square foot.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
