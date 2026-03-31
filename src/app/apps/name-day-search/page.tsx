import Page from "@/components/Page";
import NameSearchEngine from "@/components/pages/NameSearchEngine";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function NameDaySearch() {
  return (
    <Page {...pageProps}>
      <NameSearchEngine />
    </Page>
  );
}

const pageProps = {
  title: "Name Day Search Engine",
  seoTitle: "Name Day Search Engine – Whose name day is today?",
  description:
    "Free name day search engine: find out whose name day is today or search for a Finnish name's name day instantly. Search by name or select date.",
  instructions:
    "The search engine automatically shows today's name day names. You can also search for any name's name day or browse the entire calendar by date.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
