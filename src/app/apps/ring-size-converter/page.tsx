import Page from "@/components/Page";
import { Metadata } from "next";
import RingSizeConverter from "./ringSizeConverter";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function RingSizeConverterPage() {
  return (
    <Page {...pageProps}>
      <RingSizeConverter />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Ring Size Converter – US, UK, EU Ring Size Chart | ewory.com",
  title: "Ring Size Converter",
  description:
    "Convert ring sizes between US, UK, EU, and international systems. Includes diameter and circumference measurements in mm.",
  instructions:
    "Choose your sizing system and select your ring size to see equivalent sizes in all other systems.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
