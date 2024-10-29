import Page from "@/components/Page";
import { Metadata } from "next";
import HourlyPayCalculator from "./hourlyWageCalculator";
import Info from "./info.mdx";

export default function HourlyPayCalculatorPage() {
  return (
    <Page {...pageProps}>
      <HourlyPayCalculator />
    </Page>
  );
}

const pageProps = {
  title: "Hourly Wage Calculator",
  seoTitle: "Hourly Wage Calculator - Easily Calculate Your Hourly Wage",
  description:
    "Do you know how to convert a monthly salary into an hourly wage? With the hourly wage calculator, you can easily convert your monthly salary into an hourly wage.",
  instructions: `To convert a monthly salary into an hourly wage, divide the monthly salary by the divisor specified in the employment contract, or based on the average monthly work hours. An average full-time employee (working 38.25 hours per week) typically works around 166 hours per month. Enter your monthly salary and your monthly work hours, and the calculator will determine your hourly wage. You can use either gross or net salary for the calculation.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
