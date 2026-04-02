import WordCounter from "@/components/pages/WordCounter";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function FlagQuiz() {
  return (
    <Page {...pageProps}>
      <WordCounter />
    </Page>
  );
}

const pageProps = {
  title: "Word Counter",
  seoTitle: "Word Counter - Easily count words and characters",
  description:
    "How many words are in a sentence? With this tool you can easily count how many words and characters are in your text. Just paste your text into the field and the counter does the rest. Start counting now!",
  instructions: `With this tool you can easily count how many characters and words are in your text. Just paste your text into the field and the counter does the rest.`,
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
