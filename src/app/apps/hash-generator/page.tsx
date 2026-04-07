import Page from "@/components/Page";
import { Metadata } from "next";
import HashGenerator from "./hashGenerator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function HashGeneratorPage() {
  return (
    <Page {...pageProps}>
      <HashGenerator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Hash Generator – SHA-256, SHA-512, SHA-1 Online | ewory.com",
  title: "Hash Generator",
  description:
    "Generate SHA-1, SHA-256, SHA-384, and SHA-512 hashes from any text. Instant client-side hashing — no data sent to servers.",
  instructions:
    "Enter your text and click Generate Hashes. The tool creates SHA-1, SHA-256, SHA-384, and SHA-512 hashes instantly in your browser.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
