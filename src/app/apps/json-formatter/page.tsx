import App from "@/components/Page";
import { Metadata } from "next";
import JsonFormatter from "./jsonFormatter";
import Info from "./info.mdx";

export default function JsonFormatterPage() {
  return (
    <App {...pageProps}>
      <JsonFormatter />
    </App>
  );
}

const pageProps = {
  seoTitle:
    "JSON Formatter – Free Online JSON Beautifier & Validator | ewory.com",
  title: "JSON Formatter",
  description:
    "Format, beautify, and validate JSON data instantly. Minify JSON for production use. Free online JSON formatter with error highlighting.",
  instructions:
    "Paste your JSON into the input box, choose your indentation preference, and click 'Format / Beautify' to pretty-print or 'Minify' to compress. Invalid JSON will show a clear error message.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
