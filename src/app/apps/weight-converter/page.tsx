import Page from "@/components/Page";
import { Metadata } from "next";
import Painomuunnin from "./painomuunnin";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function PainomuunninPage() {
  return (
    <Page {...pageProps}>
      <Painomuunnin />
    </Page>
  );
}

const pageProps = {
  route: "weight-converter",
  title: "Weight Converter",
  seoTitle: "Weight Converter – Convert kg, g, lbs, Stone, and Tons",
  description:
    "Free weight converter: easily convert kilograms, grams, pounds (lbs), stone, and metric tons. Enter a value, select a unit, and see all conversions instantly.",
  instructions:
    "Select the source unit, enter a value, and get all conversions immediately.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
