import Page from "@/components/Page";
import GpaCalculator from "@/components/GPACalculator";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function GPACalculatorPage() {
  return (
    <Page {...pageProps}>
      <GpaCalculator />
    </Page>
  );
}

const pageProps = {
  title: "Opintojen Keskiarvolaskuri",
  seoTitle: "Opintojen Keskiarvolaskuri – Laske Helposti GPA-arvosi",
  description:
    "Laske opintojen keskiarvosi (GPA) helposti ja nopeasti opintojen keskiarvolaskurimme avulla. Syötä kurssiarvosanat ja opintopisteet saadaksesi tarkan arvion keskiarvostasi. Seuraa edistymistäsi ja aseta tavoitteita opintomenestyksellesi tehokkaan laskurimme avulla. Laskuri sopii niin korkeakoulu-, lukio-, kuin peruskouluopintoihin.",
  instructions: `Opintojen keskiarvolaskuri on monipuolinen työkalu, joka auttaa sekä korkeakoulu-, lukio- että peruskouluopiskelijoita laskemaan kurssiarvosanojen ja opintopisteiden keskiarvon helposti ja nopeasti. Syötä vain kurssiesi arvosanat ja niiden opintopisteet tai tuntimäärät, ja laskuri antaa tarkan arvion keskiarvostasi. Tämä auttaa sinua seuraamaan opintomenestystäsi, asettamaan tavoitteita ja suunnittelemaan tulevaa opiskelua tehokkaammin.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
