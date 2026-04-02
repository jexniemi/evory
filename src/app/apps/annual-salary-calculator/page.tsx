import Page from "@/components/Page";
import { Metadata } from "next";
import YearlyPayCalculator from "./yearlyPayCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function YearlyPayCalculatorPage() {
  return (
    <Page {...pageProps}>
      <YearlyPayCalculator />
    </Page>
  );
}

const pageProps = {
  title: "Annual Salary Calculator",
  seoTitle: "Annual Salary Calculator - Calculate Your Annual Salary Easily",
  description:
    "Calculate your annual salary based on monthly or hourly pay. Take into account holiday pay, bonuses, and different weekly working hours.",
  instructions:
    "Enter your monthly salary or hourly wage and weekly working hours. The calculator takes into account holiday pay (0.5 months) and possible bonuses.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
