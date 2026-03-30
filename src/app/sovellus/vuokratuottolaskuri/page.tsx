import Page from "@/components/Page";
import { Metadata } from "next";
import Vuokratuottolaskuri from "./vuokratuottolaskuri";
import Info from "./info.mdx";

export default function VuokratuottolaskuriPage() {
  return (
    <Page {...pageProps}>
      <Vuokratuottolaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Vuokratuottolaskuri",
  seoTitle: "Vuokratuottolaskuri – Laske sijoitusasunnon tuotto",
  description:
    "Ilmainen vuokratuottolaskuri: laske sijoitusasunnon brutto- ja nettovuokratuotto, kuukausittainen kassavirta ja takaisinmaksuaika. Arvioi asuntosijoituksen kannattavuus.",
  instructions:
    "Syötä asunnon ostohinta, kuukausivuokra ja vuotuiset kulut. Saat laskelman tuottoprosenteista ja kassavirrasta.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
