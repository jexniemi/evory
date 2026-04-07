import Page from "@/components/Page";
import { Metadata } from "next";
import ScientificNotationConverter from "./scientificNotationConverter";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function ScientificNotationConverterPage() {
  return (
    <Page {...pageProps}>
      <ScientificNotationConverter />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Scientific Notation Converter – Number to Scientific Notation | ewory.com",
  title: "Scientific Notation Converter",
  description:
    "Convert numbers to and from scientific notation. See coefficient, exponent, E-notation, and decimal form instantly.",
  instructions:
    "Enter a number to convert to scientific notation, or enter scientific notation (like 3.5e8) to get the decimal equivalent.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
