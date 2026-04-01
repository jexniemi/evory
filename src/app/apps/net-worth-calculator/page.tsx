import App from "@/components/Page";
import { Metadata } from "next";
import NetWorthCalculator from "./netWorthCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function NetWorthCalculatorPage() {
  return (
    <App {...pageProps}>
      <NetWorthCalculator />
    </App>
  );
}

const pageProps = {
  route: "net-worth-calculator",
  seoTitle: "Net Worth Calculator – Track Your Financial Health | ewory.com",
  title: "Net Worth Calculator",
  description:
    "Calculate your net worth by entering assets and liabilities. Track your financial health with total assets, total debt, and debt-to-asset ratio.",
  instructions:
    "Enter all your assets (savings, investments, real estate, vehicles) and liabilities (credit cards, loans, mortgage). The calculator shows your net worth and debt-to-asset ratio.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
