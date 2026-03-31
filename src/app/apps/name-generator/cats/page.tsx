import NameGenerator from "@/components/pages/NameGenerator";
import data from "@/data/namedays/cats";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function CatNameGenerator() {
  return (
    <Page {...pageProps}>
      <NameGenerator data={data} />
    </Page>
  );
}

const pageProps = {
  title: "Kissojen nimikone",
  seoTitle: "Kissojen nimikone - Löydä täydellinen nimi kissallesi",
  description:
    "Vaikeuksia keksiä nimeä kissalle? Kokeile nimikoneen avulla löytää sopiva nimi lemmikillesi. Nimikone kertoo myös kissan nimipäivän!",
  instructions: `Tervetuloa kissanystävien nimimaailmaan! Kukoista luovuutesi ja löydä täydellinen nimi karvaiselle ystävällesi meidän kissan nimikoneellamme. Syötä kissasi persoonallisuus, värit ja erityispiirteet, ja anna koneen taikoa ainutlaatuinen nimi, joka kuvastaa täydellisesti juuri sinun hännänheiluttajasi ainutlaatuista charmia. Unohda arkiset nimet ja astu fantasiamaailmaan, jossa kissasi nimi kertoo tarinan kauniista yhteiselosta ihmisen ja lemmikin välillä. Aloita seikkailu nimien maailmassa kanssamme – jokainen kissa ansaitsee oman erityisen nimensä!`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
