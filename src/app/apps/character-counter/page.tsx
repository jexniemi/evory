import App from "@/components/Page";
import { Metadata } from "next";
import CharacterCounter from "./characterCounter";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function CharacterCounterPage() {
  return (
    <App {...pageProps}>
      <CharacterCounter />
    </App>
  );
}

const pageProps = {
  seoTitle:
    "Character Counter – Free Online Character & Word Count Tool | ewory.com",
  title: "Character Counter",
  description:
    "Count characters, words, sentences, and paragraphs instantly. Check text against social media platform limits. Free online character counter tool.",
  instructions:
    "Type or paste your text into the box above. The tool instantly counts characters, words, sentences, paragraphs, and estimates reading and speaking time.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
