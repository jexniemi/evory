import Page from "@/components/Page";
import { Metadata } from "next";
import CdCalculator from "./cdCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function CdCalculatorPage() {
  return (
    <Page {...pageProps}>
      <CdCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle:
    "CD Calculator – Certificate of Deposit Interest Calculator | ewory.com",
  title: "CD Calculator",
  description:
    "Calculate certificate of deposit interest earned, total at maturity, and effective monthly earnings. Free CD calculator with APY compounding.",
  instructions:
    "Enter your deposit amount, annual APY, and term length in months. The calculator shows total interest earned, maturity value, and average monthly earnings.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
