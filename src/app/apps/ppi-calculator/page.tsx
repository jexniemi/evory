import { Metadata } from "next";
import Page from "@/components/Page";
import { generateAppMetadata, getAppRoute } from "@/utils/seo";
import PpiCalculator from "./ppiCalculator";
import Info from "./info.mdx";

const route = getAppRoute(import.meta.url);

export const metadata: Metadata = generateAppMetadata(
  "PPI Calculator – Pixels Per Inch & Screen Density | ewory.com",
  "Calculate pixels per inch (PPI), dot pitch, and screen density for any display. Enter resolution and screen size to get results.",
  route
);

export default function PpiCalculatorPage() {
  return (
    <Page
      title="PPI Calculator"
      description="Calculate pixels per inch (PPI) and screen density for any display resolution and size."
      instructions=""
      Info={Info}
    >
      <PpiCalculator />
    </Page>
  );
}
