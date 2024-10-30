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
    "Installment Calculator - Easily Calculate Monthly Payments and Interest Costs",
  title: "Installment Calculator",
  description:
    "Easily calculate your monthly payments and total costs for installments with our installment calculator. Enter the total amount of the loan or product, annual interest rate, and payment period to get an accurate estimate of monthly payments, total costs, and interest amounts.",
  instructions:
    "Use the installment calculator to determine your loan or installment's monthly payments, total price, and interest costs. Enter the total amount of the loan or product, annual interest rate, and payment period, and the calculator will provide you with an accurate estimate of this information. This way, you can make better financial decisions and manage your budget more effectively. This calculator is indicative; please check the terms provided by the seller or financing company before taking out an installment.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
