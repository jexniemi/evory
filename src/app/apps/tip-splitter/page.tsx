import App from "@/components/Page";
import { Metadata } from "next";
import TipSplitter from "./tipSplitter";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function TipSplitterPage() {
  return (
    <App {...pageProps}>
      <TipSplitter />
    </App>
  );
}

const pageProps = {
  title: "Tip Splitter",
  seoTitle: "Tip Splitter – Split Bill and Tip Among Friends | ewory.com",
  description:
    "Calculate tip amount and split the total bill evenly among any number of people. See per-person cost and tip at any tip percentage.",
  instructions:
    "Enter the bill amount, select a tip percentage, and choose how many people are splitting the check. See total tip, total bill, and per-person amount.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
