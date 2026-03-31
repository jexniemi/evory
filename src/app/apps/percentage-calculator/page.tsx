import Page from "@/components/Page";
import { Metadata } from "next";
import Prosenttilaskuri from "./prosenttilaskuri";
import Info from "./info.mdx";

export default function ProsenttilaskuriPage() {
  return (
    <Page {...pageProps}>
      <Prosenttilaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Prosenttilaskuri",
  seoTitle: "Prosenttilaskuri – Laske prosentti, osuus ja muutos helposti",
  description:
    "Ilmainen prosenttilaskuri kolmella toiminnolla: laske kuinka paljon on X% Y:stä, kuinka monta prosenttia X on Y:stä, ja kuinka monta prosenttia arvo muuttui.",
  instructions:
    "Valitse laskutoimitus alta: laske prosenttiarvo, osuusprosentti tai muutosprosentti. Syötä luvut ja tulos päivittyy välittömästi.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
