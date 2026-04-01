import Page from "@/components/Page";
import { Metadata } from "next";
import CarLoanCalculator from "./carLoanCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function CarLoanCalculatorPage() {
  return (
    <Page {...pageProps}>
      <CarLoanCalculator />
    </Page>
  );
}

const pageProps = {
  route: "car-loan-calculator",
  seoTitle: "Car Loan Calculator – Monthly Auto Payment Estimator | ewory.com",
  title: "Car Loan Calculator",
  description:
    "Calculate monthly car loan payments, total interest, and total cost. Compare different loan terms and down payments for any vehicle price.",
  instructions:
    "Enter the vehicle price, your down payment, the interest rate, and your preferred loan term. The calculator shows your monthly payment and total loan cost.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
