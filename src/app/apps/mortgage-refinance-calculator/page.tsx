import App from "@/components/Page";
import { Metadata } from "next";
import MortgageRefinanceCalculator from "./mortgageRefinanceCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function MortgageRefinanceCalculatorPage() {
  return (
    <App {...pageProps}>
      <MortgageRefinanceCalculator />
    </App>
  );
}

const pageProps = {
  title: "Mortgage Refinance Calculator",
  seoTitle:
    "Mortgage Refinance Calculator – Should I Refinance? Break-Even Point | ewory.com",
  description:
    "Calculate monthly savings, break-even point, and 5-year net savings from refinancing your mortgage. Find out if refinancing makes sense for you.",
  instructions:
    "Enter your current monthly payment, new estimated payment, and closing costs. See monthly savings, break-even timeline, and 5-year net benefit.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
