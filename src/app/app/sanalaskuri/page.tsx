import WordCounter from "@/components/pages/WordCounter";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function FlagQuiz() {
  return (
    <Page {...pageProps}>
      <WordCounter />
    </Page>
  );
}

const pageProps = {
  title: "Sanalaskuri",
  seoTitle: "Sanalaskuri - Laske sanojen määrä helposti",
  description:
    "Montako sanaa on lauseessa? Tällä sovelluksella lasket helposti kuinka monta sanaa ja merkkiä tekstissäsi on. Lisää vain tekstisi kirjoituskenttään, ja laskuri hoitaa loput. Aloita laskeminen nyt ja tarkista sanamääräsi!",
  instructions: `Tällä sovelluksella lasket helposti kuinka monta  merkkiä ja sanaa tekstissäsi on. Lisää vain tekstisi kirjoituskenttään, ja laskuri hoitaa loput.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
