import Page from "@/components/Page";
import { Metadata } from "next";
import CpmCalculator from "./cpmCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function CpmCalculatorPage() {
  return (
    <Page {...pageProps}>
      <CpmCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "CPM Calculator – Cost Per Thousand Impressions | ewory.com",
  title: "CPM Calculator",
  description:
    "Calculate CPM (cost per mille) for your ad campaigns. Enter total cost and impressions to find your cost per thousand impressions.",
  instructions:
    "Enter the total ad spend and number of impressions. The calculator shows CPM and cost breakdowns instantly.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
