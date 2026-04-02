import App from "@/components/Page";
import { Metadata } from "next";
import SalesTaxCalculator from "./salesTaxCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function SalesTaxCalculatorPage() {
  return (
    <App {...pageProps}>
      <SalesTaxCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Sales Tax Calculator – Free Online Tax Estimator | ewory.com",
  title: "Sales Tax Calculator",
  description:
    "Calculate sales tax amount and total price instantly. Reverse-calculate pre-tax price. Covers all US state rates. Free online sales tax calculator.",
  instructions:
    "Enter the item price and your local sales tax rate. The calculator shows the tax amount, total price with tax, and the reverse pre-tax price.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
