import App from "@/components/Page";
import { Metadata } from "next";
import WaistToHipRatioCalculator from "./waistToHipRatioCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function WaistToHipRatioCalculatorPage() {
  return (
    <App {...pageProps}>
      <WaistToHipRatioCalculator />
    </App>
  );
}

const pageProps = {
  title: "Waist-to-Hip Ratio Calculator",
  seoTitle: "Waist-to-Hip Ratio Calculator – Free WHR Health Tool | ewory.com",
  description:
    "Calculate your waist-to-hip ratio (WHR) instantly. See your cardiovascular health risk level based on WHO standards for men and women.",
  instructions:
    "Enter your waist and hip measurements in centimeters, then select your biological sex. The calculator shows your WHR and your cardiovascular health risk category.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
