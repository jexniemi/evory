import Page from "@/components/Page";
import { Metadata } from "next";
import HourlyPayCalculator from "./hourlyPayCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function HourlyPayCalculatorPage() {
  return (
    <Page {...pageProps}>
      <HourlyPayCalculator />
    </Page>
  );
}

const pageProps = {
  title: "Hourly Salary Calculator",
  seoTitle: "Hourly Salary Calculator - Calculate your hourly wage easily",
  description:
    "Convert monthly salary to hourly wage easily. Enter your monthly salary and weekly working hours, and the calculator will show your hourly wage, daily wage and annual salary.",
  instructions:
    "Enter your monthly salary and weekly working hours. The calculator calculates your hourly wage, daily wage and annual salary. The most common weekly working hours are 37.5 h (office, retail) and 40 h (industry).",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
