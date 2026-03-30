import Page from "@/components/Page";
import { Metadata } from "next";
import Raskauslaskuri from "./raskauslaskuri";
import Info from "./info.mdx";

export default function RaskauslaskuriPage() {
  return (
    <Page {...pageProps}>
      <Raskauslaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Raskauslaskuri",
  seoTitle: "Raskauslaskuri – Laske laskettu aika ja raskausviikot",
  description:
    "Ilmainen raskauslaskuri: laske laskettu aika, nykyinen raskausviikko, trimesteri ja tärkeät virstanpylväät synnytyksen arvioituun päivämäärään. Syötä viimeisten kuukautisten päivä.",
  instructions:
    "Syötä viimeisten kuukautisten ensimmäinen päivä tai laskettu aika, niin näet raskausviikon, trimesterin ja tärkeät päivämäärät.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
