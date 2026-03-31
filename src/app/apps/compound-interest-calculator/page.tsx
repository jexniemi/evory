import Page from "@/components/Page";
import CompoundInterestCalculator from "./compoundInterestCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function CompoundInterestCalculatorPage() {
  return (
    <Page {...pageProps}>
      <CompoundInterestCalculator />
    </Page>
  );
}

const pageProps = {
  title: "Korkoa korolle -laskuri",
  seoTitle: "Korkoa Korolle Laskuri - Laske Sijoituksesi Tuleva Arvo Helposti",
  description:
    "Laske sijoituksesi tuleva arvo helposti korkoa korolle -laskurillamme! Syötä alkuperäinen pääoma, korkoprosentti, sijoitusaika, ja kuukausittainen säästösummasi, ja näe kuinka sijoituksesi kasvaa eksponentiaalisesti ajan myötä. Käytä laskuriamme suunnitellaksesi säästöt ja sijoitukset tehokkaasti.",
  instructions: `Tällä laskurilla lasket kätevästi säästöjesi tai sijoituksesi tulevaisuuden arvon, ottaen huomioon korkoea korolle -ilmiön. Syötä alkupääomasi, vuotuinen korkoprosentti, sijoitusaika vuosina ja kuukausittainen säästösumma. Paina laskenta-painiketta ja katso, kuinka helposti ja nopeasti korkoa korolle -laskurimme antaa sinulle tarkan arvion sijoituksesi tuotosta.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
