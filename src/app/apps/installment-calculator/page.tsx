import Page from "@/components/Page";
import InstallmentCalculator from "./installmentCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function InstallmentCalculatorPage() {
  return (
    <Page {...pageProps}>
      <InstallmentCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle:
    "Installment Calculator - Calculate Monthly Payments and Interest Costs Easily",
  title: "Installment Calculator",
  description:
    "Calculate your installment monthly payments and total costs easily with our installment calculator. Enter the total amount of the loan or product, annual interest rate and payment period, and get an accurate estimate of monthly payments, total costs and interest amount.",
  instructions:
    "Use the installment calculator to find out your loan or installment monthly payments, total price and interest costs. Enter the total amount of the loan or product, annual interest rate and payment period, and the calculator will give you an accurate estimate of this information. This way you can make better financial decisions and manage your budget more efficiently. This calculator is indicative, check the terms offered by the seller or financing company before taking out an installment.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
