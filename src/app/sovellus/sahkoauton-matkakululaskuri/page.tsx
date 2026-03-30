import Calculator from "./electricityCostCalculator";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function ElectricCarCalculatorPage() {
  return (
    <Page {...pageProps}>
      <Calculator />
    </Page>
  );
}

const pageProps = {
  title: "Sähköauton matkakululaskuri",
  seoTitle: "Sähköauton matkakululaskuri - Laske Matkasi Sähkökustannukset",
  description:
    "Laske ajomatkasi sähköauton sähkökustannukset helposti ja nopeasti sähköauton matkakululaskurilla. Syötä matkan pituus, ajoneuvosi energiankulutus ja sähkön hinta saadaksesi tarkan arvion matkasi kustannuksista. Säästä rahaa ja suunnittele matkasi tehokkaammin!",
  instructions: `Syötä ajomatkasi pituus kilometreinä, ajoneuvosi keskimääräinen energiankulutus (kWh per 100 kilometriä) ja sähkön hinta per kWh euroina. Paina laskenta-painiketta ja katso, kuinka helposti ja nopeasti sähköauton matkakululaskurimme antaa sinulle tarkan arvion matkasi sähkökustannuksista. Näillä yksinkertaisilla ohjeilla voit suunnitella matkasi tehokkaammin ja säästää rahaa – laske sähkökulut käden käänteessä!`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
