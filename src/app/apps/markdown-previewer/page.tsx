import Page from "@/components/Page";
import { Metadata } from "next";
import MarkdownPreviewer from "./markdownPreviewer";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function MarkdownPreviewerPage() {
  return (
    <Page {...pageProps}>
      <MarkdownPreviewer />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Markdown Previewer – Free Online Markdown Editor | ewory.com",
  title: "Markdown Previewer",
  description:
    "Write and preview Markdown in real time. Supports headings, bold, italic, code blocks, lists, links, and blockquotes.",
  instructions:
    "Type Markdown in the left panel and see the live preview on the right. Supports all standard Markdown syntax.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
