import Page from "@/components/Page";
import { Metadata } from "next";
import BreakEvenCalculator from "./breakEvenCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function BreakEvenCalculatorPage() {
  return (
    <Page {...pageProps}>
      <BreakEvenCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle:
    "Break-Even Calculator – Find Your Business Break-Even Point | ewory.com",
  title: "Break-Even Calculator",
  description:
    "Calculate the break-even point for your business in units and revenue. See your contribution margin and profit at double the break-even volume.",
  instructions:
    "Enter your fixed monthly costs, price per unit or sale, and variable cost per unit. The calculator shows how many units you need to sell to cover all costs.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
