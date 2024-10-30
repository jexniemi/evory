import WordCounter from "@/components/pages/WordCounter";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function WordCounterApp() {
  return (
    <Page {...pageProps}>
      <WordCounter />
    </Page>
  );
}

const pageProps = {
  title: "Word Counter",
  seoTitle: "Word Counter - Easily Count Words",
  description:
    "How many words are in a sentence? With this tool, you can easily calculate the number of words and characters in your text. Just add your text to the input field, and the counter does the rest. Start counting now and check your word count!",
  instructions: `With this tool, you can easily calculate the number of characters and words in your text. Just add your text to the input field, and the counter does the rest.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
