import App from "@/components/Page";
import { Metadata } from "next";
import StudentLoanCalculator from "./studentLoanCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function StudentLoanCalculatorPage() {
  return (
    <App {...pageProps}>
      <StudentLoanCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle:
    "Student Loan Calculator – Monthly Payment & Interest Estimator | ewory.com",
  title: "Student Loan Calculator",
  description:
    "Calculate monthly student loan payments, total interest, and total repayment amount. Works for federal and private student loans.",
  instructions:
    "Enter your student loan balance, interest rate, and repayment term to see your monthly payment and total interest paid.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
