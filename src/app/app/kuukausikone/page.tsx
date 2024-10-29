import Page from "@/components/Page";
import MonthPicker from "@/components/MonthPicker/MonthPicker";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function SummerVacationCountdown() {
  return (
    <Page {...pageProps}>
      <MonthPicker />
    </Page>
  );
}

const pageProps = {
  title: "Kuukausikone",
  seoTitle: "Kuukausikone - Monta päivää on kuukaudessa?",
  description:
    "Päivämäärien tarkistussivusto tarjoaa kätevän työkalun päivien lukumäärän selvittämiseen eri kuukausina. Selvitä helposti ja nopeasti, kuinka monta päivää on haluamanasi ajankohtana. Suunnittele tapahtumia ja lomia helposti tietäen kuukauden päivämäärät etukäteen. Käytä päivämäärien tarkistusta hyväksesi ja pidä aikataulut hallinnassa!",
  instructions: `
  Tervetuloa kuukausikoneeseen! Täältä löydät kätevän työkalun, jonka avulla voit selvittää nopeasti ja helposti, kuinka monta päivää on missäkin kuukaudessa. Olit sitten suunnittelemassa lomaa, tapahtumaa tai muuta tärkeää ajankohtaa, tämä sivu auttaa sinua pitämään asiat hallinnassa. Valitse vain haluamasi kuukausi listalta, niin saat hetkessä tiedon päivien määrästä. Käytä tätä sivua hyväksesi suunnitellessasi tulevia tapahtumia ja pidä päivät järjestyksessä helposti ja kätevästi!`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
