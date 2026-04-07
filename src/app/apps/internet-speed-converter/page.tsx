import Page from "@/components/Page";
import { Metadata } from "next";
import InternetSpeedConverter from "./internetSpeedConverter";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function InternetSpeedConverterPage() {
  return (
    <Page {...pageProps}>
      <InternetSpeedConverter />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Internet Speed Converter – Mbps to MB/s, Gbps, Kbps | ewory.com",
  title: "Internet Speed Converter",
  description:
    "Convert internet speeds between Mbps, MB/s, Gbps, and Kbps. See how long files take to download at your speed.",
  instructions:
    "Enter your internet speed in Mbps to see conversions to other units and estimated download times.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
