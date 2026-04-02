import Page from "@/components/Page";
import { Metadata } from "next";
import Promillelaskuri from "./promillelaskuri";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function PromillelaskuriPage() {
  return (
    <Page {...pageProps}>
      <Promillelaskuri />
    </Page>
  );
}

const pageProps = {
  title: "BAC Calculator",
  seoTitle:
    "BAC Calculator – Estimate Blood Alcohol Content with Widmark Formula",
  description:
    "Calculate estimated BAC based on gender, weight, drinks consumed, and time elapsed. The calculator also shows estimated time to sober up and to be fit to drive.",
  instructions:
    "Enter your details and get an instant estimate of your BAC. The result is only indicative — do not drive if you have consumed alcohol.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
