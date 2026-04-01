import App from "@/components/Page";
import { Metadata } from "next";
import AlvCalculator from "./alvCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function AlvCalculatorPage() {
  return (
    <App {...pageProps}>
      <AlvCalculator />
    </App>
  );
}

const pageProps = {
  route: "vat-calculator",
  seoTitle: "Sales Tax Calculator – Calculate Tax Amount Easily",
  title: "Sales Tax Calculator",
  description:
    "Calculate sales tax easily. Find the tax amount, gross price, or net price using common US sales tax rates: 10%, 5%, and 0%.",
  instructions:
    "Enter a price and select the appropriate tax rate. The calculator shows the tax amount for both adding tax (pre-tax → total) and removing tax (total → pre-tax).",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
