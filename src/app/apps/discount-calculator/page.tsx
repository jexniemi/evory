import Page from "@/components/Page";
import { Metadata } from "next";
import Calculator from "./discountCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function DiscountCalculator() {
  return (
    <Page {...pageProps}>
      <Calculator />
    </Page>
  );
}

const pageProps = {
  route: "discount-calculator",
  seoTitle:
    "Discount Calculator - Calculate Discounted Price and Savings Easily",
  title: "Discount Calculator",
  description:
    "Calculate the discounted price of your product or service easily with our discount calculator. Enter the original price and discount percentage, and get an accurate estimate of the discounted price and savings. Understand how much money you can save and make smarter purchasing decisions.",
  instructions:
    "Use the discount calculator to find out the discounted price and savings of your product or service. Enter the original price and discount percentage, and the calculator will give you an accurate estimate of how much the discount affects the price and how much money you save. This way, you can make better purchasing decisions and manage your budget more efficiently.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
