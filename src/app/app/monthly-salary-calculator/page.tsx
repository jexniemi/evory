import Page from "@/components/Page";
import MonthlyPayCalculator from "./monthlySalaryCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function MonthlyPayCalculatorPage() {
  return (
    <Page {...pageProps}>
      <MonthlyPayCalculator />
    </Page>
  );
}

const pageProps = {
  title: "Monthly Salary Calculator",
  seoTitle: "Monthly Salary Calculator - Easily Calculate Your Monthly Salary",
  description:
    "Do you know how to convert your hourly wage to a monthly salary? With the Monthly Salary Calculator, you can easily convert your hourly wage into a monthly salary.",
  instructions: `To convert your hourly wage to a monthly salary,
  multiply the hourly wage by the monthly
  working hours. An average full-time employee (working 40 hours per week)
  typically works around 173 hours a month. Enter
  your hourly wage and monthly working hours, and the calculator will compute
  your monthly salary. You can enter either your gross or net salary in the field, depending on what you want to calculate.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
