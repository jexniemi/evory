import Page from "@/components/Page";
import { Metadata } from "next";
import DebtToIncomeCalculator from "./debtToIncomeCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function DebtToIncomeCalculatorPage() {
  return (
    <Page {...pageProps}>
      <DebtToIncomeCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Debt-to-Income Ratio Calculator – Free DTI Calculator | ewory.com",
  title: "Debt-to-Income Calculator",
  description:
    "Calculate your debt-to-income ratio to see if you qualify for a mortgage or loan. Free DTI calculator with the 28/36 rule explained.",
  instructions:
    "Enter your monthly gross income and total monthly debt payments. The calculator shows your DTI ratio and maximum recommended housing payment.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
