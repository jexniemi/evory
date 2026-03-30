import NameGenerator from "@/components/pages/NameGenerator";
import data from "@/data/namedays/dogs";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function DogNameGenerator() {
  return (
    <Page {...pageProps}>
      <NameGenerator data={data} />
    </Page>
  );
}

const pageProps = {
  title: "Koirien nimikone",
  seoTitle: "Koirien nimikone - Löydä täydellinen nimi koirallesi",
  description:
    "Vaikeuksia keksiä nimeä koiralle? Kokeile nimikoneen avulla löytää sopiva nimi lemmikillesi. Nimikone kertoo myös koirasi nimipäivän!",
  instructions: `
  Koirien nimigeneraattori on hauska ja nopea tapa löytää lemmikillesi täydellinen nimi ilman turhia mutkia! Syötä yksinkertaisesti generaattoriin mieltymyksesi, tunnelmasi tai jopa sattumanvarainen sana, ja se tuottaa välittömästi ainutlaatuisia ja suloisia koiran nimiä. Kokeile sitä nyt, ja anna lemmikillesi nimi, joka kuvastaa täydellisesti sen persoonaa – ilman ylimääräisiä tietoja tarvitaan!`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
