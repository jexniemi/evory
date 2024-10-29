import Page from "@/components/Page";
import { Metadata } from "next";
import Calculator from "./discountCalculator";
import Info from "./info.mdx";

export default function DiscountCalculator() {
  return (
    <Page {...pageProps}>
      <Calculator />
    </Page>
  );
}

const pageProps = {
  seoTitle:
    "Discount Calculator - Easily Calculate Discounted Price and Savings",
  title: "Discount Calculator",
  description:
    "Easily calculate the discounted price of your product or service with our discount calculator. Enter the original price and discount percentage to get an accurate estimate of the discounted price and savings. Understand how much money you can save and make smarter purchasing decisions.",
  instructions:
    "Use the discount calculator to find out the discounted price and savings for your product or service. Enter the original price and discount percentage, and the calculator will give you an accurate estimate of how much the discount affects the price and how much money you save. This way, you can make better purchasing decisions and manage your budget more effectively.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
