import App from "@/components/Page";
import { Metadata } from "next";
import BaseConverter from "./baseConverter";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function BaseConverterPage() {
  return (
    <App {...pageProps}>
      <BaseConverter />
    </App>
  );
}

const pageProps = {
  title: "Base Converter",
  seoTitle: "Base Converter – Binary, Decimal, Octal, Hexadecimal | ewory.com",
  description:
    "Convert numbers between binary (base 2), octal (base 8), decimal (base 10), and hexadecimal (base 16) instantly. Free online number base converter.",
  instructions:
    "Type a number in any field — decimal, binary, octal, or hexadecimal — and all other fields update automatically.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
