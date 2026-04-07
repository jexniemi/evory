import { Metadata } from "next";
import Page from "@/components/Page";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";
import BinaryTranslator from "./binaryTranslator";
import Info from "./info.mdx";

const route = getAppRoute(import.meta.url);

export const metadata: Metadata = generateAppMetadata({
  seoTitle: "Binary Translator – Free Online Text to Binary Converter | ewory.com",
  title: "Binary Translator",
  description: "Convert text to binary, hexadecimal, octal, and decimal. Translate binary back to readable text instantly.",
  route,
});

export default function BinaryTranslatorPage() {
  return (
    <Page
      title="Binary Translator"
      description="Convert text to binary, hex, octal, and decimal — or translate binary back to text."
      instructions=""
      Info={Info}
    >
      <BinaryTranslator />
    </Page>
  );
}
