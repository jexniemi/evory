import App from "@/components/Page";
import { Metadata } from "next";
import NetSalaryCalculator from "./netSalaryCalculator";
import Info from "./info.mdx";

export default function NetSalaryCalculatorPage() {
  return (
    <App {...pageProps}>
      <NetSalaryCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Net Salary Calculator - Calculate Net Salary from Gross Salary",
  title: "Net Salary Calculator",
  description:
    "Calculate net salary from gross salary. Find out how much salary remains after taxes and side costs.",
  instructions:
    "Enter gross salary, tax percentage and statutory side costs. The calculator shows your net salary, i.e. the take-home amount per month.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
