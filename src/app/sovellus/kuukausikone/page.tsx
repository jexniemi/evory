import Page from "@/components/Page";
import MonthMachine from "./monthMachine";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function MonthMachinePage() {
  return (
    <Page {...pageProps}>
      <MonthMachine />
    </Page>
  );
}

const pageProps = {
  title: "Kuukausikone",
  seoTitle: "Kuukausikone – Kuukausien päivät, kalenteri ja karkausvuodet",
  description:
    "Selvitä kuinka monta päivää on missäkin kuukaudessa, tarkista karkausvuodet ja selaa minkä tahansa vuoden kuukausikalentereita.",
  instructions:
    "Valitse vuosi nuolilla ja klikkaa kuukautta nähdäksesi päivien määrän ja kalenterinäkymän. Tänään-päivä on korostettu vihreällä.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
