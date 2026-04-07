import Page from "@/components/Page";
import { Metadata } from "next";
import TireSizeCalculator from "./tireSizeCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function TireSizeCalculatorPage() {
  return (
    <Page {...pageProps}>
      <TireSizeCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle:
    "Tire Size Calculator – Compare Tire Sizes & Speedometer Error | ewory.com",
  title: "Tire Size Calculator",
  description:
    "Compare tire sizes side by side. See diameter, circumference, sidewall height, and speedometer difference when changing tire sizes.",
  instructions:
    "Enter your original and new tire sizes (width/aspect ratio/rim). The calculator compares dimensions and shows speedometer impact.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
