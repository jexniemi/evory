import Page from "@/components/Page";
import InstallmentCalculator from "./installmentCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function InstallmentCalculatorPage() {
  return (
    <Page {...pageProps}>
      <InstallmentCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle:
    "Osamaksulaskuri - Laske Kuukausierät ja Korkokustannukset Helposti",
  title: "Osamaksulaskuri",
  description:
    "Laske osamaksujesi kuukausierät ja kokonaiskustannukset helposti osamaksulaskurillamme. Syötä lainan tai tuotteen kokonaissumma, vuosikorko ja maksuaika, ja saat tarkan arvion kuukausieristä, kokonaiskustannuksista ja korkojen määrästä.",
  instructions:
    "Käytä osamaksulaskuria selvittääksesi lainasi tai osamaksusi kuukausierät, kokonaishinnan ja korkokustannukset. Syötä lainan tai tuotteen kokonaissumma, vuosikorko ja maksuaika, ja laskuri antaa sinulle tarkan arvion näistä tiedoista. Näin voit tehdä parempia taloudellisia päätöksiä ja hallita budjettiasi tehokkaammin. Tämä laskuri on suuntaa antava, tarkistathan myyjän tai rahoitusyhtiön tarjoamat ehdot ennen osamaksun ottamista.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
