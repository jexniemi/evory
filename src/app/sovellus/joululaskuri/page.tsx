import Countdown from "@/components/Countdown";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function ChristmasCountdown() {
  return (
    <Page {...pageProps}>
      <Countdown
        targetDateName="Jouluaattoon"
        targetDate={new Date("2024-12-24T00:00:00")}
      />
    </Page>
  );
}

const pageProps = {
  title: "Joululaskuri",
  seoTitle: "Joululaskuri - Katso kuinka monta päivää on jäljellä jouluun.",
  description:
    "Montako päivää on jouluun? Seuraa odotustasi jouluun reaaliaikaisesti käyttämällä kätevää joululaskuriamme. Näet päivien, tuntien ja minuuttien vähenemisen kohti jouluaattoa. Aloita joulun odottaminen nyt ja valmistaudu juhlimaan täysin sydämin! Käytä joululaskuriamme ja tuo jouluiloa laskurisi avulla",
  instructions: `Tervetuloa joululaskuriin! Seuraa jännityksellä päivien, tuntien ja minuuttien vähenemistä kohti odotettua jouluaattoa. Anna lähtöpäiväsi, ja laskuri näyttää reaaliaikaisesti, kuinka kauan on jäljellä jouluun. Aloita odotuksen laskeminen nyt ja valmistaudu juhlimaan jouluasi täysin sydämin!`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
