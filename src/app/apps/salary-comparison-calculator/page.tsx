import App from "@/components/Page";
import { Metadata } from "next";
import SalaryComparisonCalculator from "./salaryComparisonCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function SalaryComparisonCalculatorPage() {
  return (
    <App {...pageProps}>
      <SalaryComparisonCalculator />
    </App>
  );
}

const pageProps = {
  title: "Salary Comparison Calculator",
  seoTitle: "Salary Comparison Calculator – Compare Two Salaries Side by Side | ewory.com",
  description:
    "Compare two salaries instantly. See annual, monthly, and weekly dollar difference and which offer is higher by what percentage.",
  instructions:
    "Enter Salary A and Salary B as annual amounts. The calculator shows the difference in dollars and percentage across annual, monthly, and weekly pay.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
