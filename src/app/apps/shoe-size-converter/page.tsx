import Page from "@/components/Page";
import { Metadata } from "next";
import ShoeSizeConverter from "./shoeSizeConverter";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function ShoeSizeConverterPage() {
  return (
    <Page {...pageProps}>
      <ShoeSizeConverter />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Shoe Size Converter – US, UK, EU Size Chart | ewory.com",
  title: "Shoe Size Converter",
  description:
    "Convert shoe sizes between US, UK, EU, and centimeters. Free men's and women's shoe size chart with instant conversion.",
  instructions:
    "Select men's or women's, pick a US shoe size, and see the equivalent UK, EU, and CM sizes instantly.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
