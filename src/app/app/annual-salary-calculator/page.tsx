import Page from "@/components/Page";
import { Metadata } from "next";
import YearlyPayCalculator from "./yearlyPayCalculator";
import Info from "./info.mdx";

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
    "With the yearly salary calculator, you can easily calculate your annual salary based on either your hourly wage or monthly salary.",
  instructions: `Annual salary is calculated either by multiplying your monthly salary by 12.5 (or 12 if you do not receive holiday pay) or by your hourly wage times annual working hours. Enter your hourly wage and annual working hours, or alternatively, your monthly salary and any bonuses, and the calculator will compute your annual salary. You can input either your gross or net salary in the field, depending on what you want to calculate.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
