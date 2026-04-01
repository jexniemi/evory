import App from "@/components/Page";
import { Metadata } from "next";
import CompoundCalculator from "./compoundCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function CompoundPage() {
  return (
    <App {...pageProps}>
      <CompoundCalculator />
    </App>
  );
}

const pageProps = {
  route: "simple-compound-interest-calculator",
  seoTitle: "Compound Interest Calculator – Calculate Investment Growth",
  title: "Simple Compound Interest Calculator",
  description:
    "Calculate how much your investment grows with the compound interest principle. Enter initial capital, annual return, and investment time – get final balance, interest earnings, and doubling time.",
  instructions:
    "Enter initial capital, annual return percentage, and investment time in years. The calculator shows final balance, accumulated interest, total growth, and capital doubling time.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
