import Page from "@/components/Page";
import MonthlyPayCalculator from "./monthlyPayCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function MonthlyPayCalculatorPage() {
  return (
    <Page {...pageProps}>
      <MonthlyPayCalculator />
    </Page>
  );
}

const pageProps = {
  title: "Monthly Salary Calculator",
  seoTitle: "Monthly Salary Calculator - Calculate monthly salary easily",
  description:
    "Convert hourly wage to monthly salary easily. Enter your hourly wage and weekly working hours, and the calculator will show your monthly salary, daily wage and annual salary.",
  instructions:
    "Enter your hourly wage and weekly working hours. The calculator calculates your monthly salary, daily wage and annual salary. The most common weekly working hours are 37.5 h (office, retail) and 40 h (industry).",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
