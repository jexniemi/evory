import Page from "@/components/Page";
import { Metadata } from "next";
import EmiCalculator from "./emiCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function EmiCalculatorPage() {
  return (
    <Page {...pageProps}>
      <EmiCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle:
    "EMI Calculator – Free Equated Monthly Installment Calculator | ewory.com",
  title: "EMI Calculator",
  description:
    "Calculate your Equated Monthly Installment (EMI) for any loan. See monthly payment, total interest, and total amount payable instantly.",
  instructions:
    "Enter the loan amount, annual interest rate, and loan tenure in months. The calculator shows your monthly EMI, total payment, and total interest.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
