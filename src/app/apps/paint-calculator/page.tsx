import Page from "@/components/Page";
import { Metadata } from "next";
import PaintCalculator from "./paintCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function PaintCalculatorPage() {
  return (
    <Page {...pageProps}>
      <PaintCalculator />
    </Page>
  );
}

const pageProps = {
  route: "paint-calculator",
  seoTitle: "Paint Calculator – Free Online Wall Paint Estimator | ewory.com",
  title: "Paint Calculator",
  description:
    "Calculate how much paint you need for any room. Enter room dimensions, doors, and windows to get paintable area and gallons required.",
  instructions:
    "Enter your room length, width, and height in feet, along with the number of doors and windows. The calculator subtracts door and window areas and estimates how many gallons of paint you need for two coats.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
