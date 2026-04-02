import App from "@/components/Page";
import { Metadata } from "next";
import TextCaseConverter from "./textCaseConverter";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function TextCaseConverterPage() {
  return (
    <App {...pageProps}>
      <TextCaseConverter />
    </App>
  );
}

const pageProps = {
  title: "Text Case Converter",
  seoTitle: "Text Case Converter – UPPERCASE, camelCase, snake_case & More | ewory.com",
  description:
    "Convert text between uppercase, lowercase, title case, camelCase, PascalCase, snake_case, kebab-case and more. Free online text case converter.",
  instructions:
    "Type or paste your text in the input field. All case conversions appear instantly below — click Copy next to any format to copy it to your clipboard.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
