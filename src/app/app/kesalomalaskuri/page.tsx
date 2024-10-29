import Countdown from "@/components/Countdown";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function SummerVacationCountdown() {
  return (
    <Page {...pageProps}>
      <Countdown
        targetDateName="Kesälomaan"
        targetDate={new Date("2025-06-01T00:00:00")}
        allowUserSelection
      />
    </Page>
  );
}

const pageProps = {
  title: "Kesälomalaskuri",
  seoTitle:
    "Kesälomalaskuri – Laske Helposti Päivät, Tunnit ja Minuutit Kesälomaan",
  description:
    "Seuraa odotustasi kesälomaan reaaliaikaisesti käyttämällä kätevää kesälomalaskuriamme. Näytämme sinulle päivien, tuntien ja minuuttien vähenemisen kohti ansaittua lomaa. Aloita laskeminen nyt ja valmistaudu rentouttavaan kesälomaan!",
  instructions: `Tervetuloa kesälomalaskuriin! Tämä kätevä laskuri näyttää reaaliaikaisesti, kuinka monta päivää, tuntia ja minuuttia on jäljellä odottaessasi ansaittua kesälomaasi. Seuraa päivien, tuntien ja minuuttien vähenemistä matkallasi kohti rentouttavaa kesälomaa. Koulujen kesälomat alkavat suurimmassa osassa maata 01.06.2024, mutta voit myös valita oman kesälomasi alkamispäivän. Valitse haluamasi päivämäärä ja aloita laskeminen!`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
