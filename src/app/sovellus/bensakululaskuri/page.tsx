import Calculator from "./gasCostCalculator";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function GasCostCalculatorPage() {
  return (
    <Page {...pageProps}>
      <Calculator />
    </Page>
  );
}

const pageProps = {
  title: "Bensakululaskuri",
  seoTitle: "Bensakululaskuri - Laske Matkasi Polttoainekustannukset",
  description:
    "Laske ajomatkasi polttoainekustannukset helposti ja nopeasti bensakululaskurilla. Syötä matkan pituus, polttoaineenkulutus ja polttoaineen hinta saadaksesi tarkan arvion matkasi kustannuksista. Säästä rahaa ja suunnittele matkasi tehokkaammin!",
  instructions: `Syötä ajomatkasi pituus kilometreinä, ajoneuvosi keskimääräinen polttoaineenkulutus (litraa per 100 kilometriä) ja nykyinen polttoaineen hinta per litra euroina. Paina laskenta-painiketta ja katso, kuinka helposti ja nopeasti bensakululaskurimme antaa sinulle tarkan arvion matkasi polttoainekustannuksista. Näillä yksinkertaisilla ohjeilla voit suunnitella matkasi tehokkaammin ja säästää rahaa – laske bensakulut käden käänteessä!`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
