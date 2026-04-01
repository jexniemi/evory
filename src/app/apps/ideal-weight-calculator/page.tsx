import Page from "@/components/Page";
import { Metadata } from "next";
import IdealWeightCalculator from "./idealWeightCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function IdealWeightCalculatorPage() {
  return (
    <Page {...pageProps}>
      <IdealWeightCalculator />
    </Page>
  );
}

const pageProps = {
  route: "ideal-weight-calculator",
  seoTitle:
    "Ideal Weight Calculator – Free Online Tool by Height & Gender | ewory.com",
  title: "Ideal Weight Calculator",
  description:
    "Calculate your ideal body weight using Devine, Robinson, and Miller formulas. Compare results by height and gender with healthy BMI range.",
  instructions:
    "Enter your height in inches and select your gender. The calculator shows ideal weight estimates from three medical formulas plus the healthy BMI weight range.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
