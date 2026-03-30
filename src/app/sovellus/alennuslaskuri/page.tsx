import Page from "@/components/Page";
import { Metadata } from "next";
import Calculator from "./discountCalculator";
import Info from "./info.mdx";

export default function DiscountCalculator() {
  return (
    <Page {...pageProps}>
      <Calculator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Alennuslaskuri - Laske Alennettu Hinta ja Säästöt Helposti",
  title: "Alennuslaskuri",
  description:
    "Laske tuotteesi tai palvelusi alennettu hinta helposti alennuslaskurillamme. Syötä alkuperäinen hinta ja alennusprosentti, ja saat tarkan arvion alennetusta hinnasta ja säästöistä. Ymmärrä, kuinka paljon rahaa voit säästää ja tee fiksumpia ostospäätöksiä.",
  instructions:
    "Käytä alennuslaskuria selvittääksesi tuotteesi tai palvelusi alennetun hinnan ja säästöt. Syötä alkuperäinen hinta ja alennusprosentti, ja laskuri antaa sinulle tarkan arvion siitä, kuinka paljon alennus vaikuttaa hintaan ja kuinka paljon rahaa säästät. Näin voit tehdä parempia ostospäätöksiä ja hallita budjettiasi tehokkaammin.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
