import Page from "@/components/Page";
import { Metadata } from "next";
import PaivamaaraLaskuri from "./paivamaaraLaskuri";
import Info from "./info.mdx";

export default function PaivamaaraLaskuriPage() {
  return (
    <Page {...pageProps}>
      <PaivamaaraLaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Päivämäärälaskuri",
  seoTitle: "Päivämäärälaskuri – Laske päivien, viikkojen ja kuukausien ero",
  description:
    "Ilmainen päivämäärälaskuri: laske kuinka monta päivää, viikkoa tai kuukautta kahden päivämäärän välillä on, tai lisää päiviä valitsemaasi päivämäärään.",
  instructions:
    "Valitse kaksi päivämäärää nähdäksesi niiden välisen eron. Voit myös lisätä tai vähentää päiviä mistä tahansa päivämäärästä.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
