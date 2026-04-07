import { Metadata } from "next";
import Page from "@/components/Page";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";
import PpiCalculator from "./ppiCalculator";
import Info from "./info.mdx";

const route = getAppRoute(import.meta.url);

export const metadata: Metadata = generateAppMetadata({
  seoTitle: "PPI Calculator – Pixels Per Inch & Screen Density | ewory.com",
  title: "PPI Calculator",
  description:
    "Calculate pixels per inch (PPI), dot pitch, and screen density for any display. Enter resolution and screen size to get results.",
  route,
});

export default function PpiCalculatorPage() {
  return (
    <Page
      title="PPI Calculator"
      description="Calculate pixels per inch (PPI) and screen density for any display resolution and size."
      instructions="Enter your screen's resolution (width and height in pixels) and its diagonal size in inches, or click a device preset. The calculator shows PPI, dot pitch, megapixels, and physical display dimensions."
      Info={Info}
    >
      <PpiCalculator />
    </Page>
  );
}
