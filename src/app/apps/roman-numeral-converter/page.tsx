import App from "@/components/Page";
import { Metadata } from "next";
import RomanNumeralConverter from "./romanNumeralConverter";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function RomanNumeralConverterPage() {
  return (
    <App {...pageProps}>
      <RomanNumeralConverter />
    </App>
  );
}

const pageProps = {
  title: "Roman Numeral Converter",
  seoTitle: "Roman Numeral Converter – Numbers to Roman Numerals | ewory.com",
  description:
    "Convert numbers to Roman numerals and Roman numerals back to numbers instantly. Free online Roman numeral converter for any number 1–3999.",
  instructions:
    "Enter a number (1–3999) to convert to Roman numerals, or type Roman numerals (like XIV or MMXXIV) to convert back to a number.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
