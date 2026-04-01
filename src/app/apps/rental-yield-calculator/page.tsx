import Page from "@/components/Page";
import { Metadata } from "next";
import Vuokratuottolaskuri from "./vuokratuottolaskuri";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function VuokratuottolaskuriPage() {
  return (
    <Page {...pageProps}>
      <Vuokratuottolaskuri />
    </Page>
  );
}

const pageProps = {
  route: "rental-yield-calculator",
  title: "Rental Yield Calculator",
  seoTitle: "Rental Yield Calculator – Calculate Investment Property Return",
  description:
    "Free rental yield calculator: calculate the gross and net rental yield of an investment property, monthly cash flow, and payback period. Assess the profitability of property investment.",
  instructions:
    "Enter the property's purchase price, monthly rent, and annual costs. Get a calculation of yield percentages and cash flow.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
