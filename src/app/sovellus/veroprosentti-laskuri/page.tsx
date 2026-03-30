import App from "@/components/Page";
import { Metadata } from "next";
import TaxRateCalculator from "./taxRateCalculator";
import Info from "./info.mdx";

export default function TaxRatePage() {
  return (
    <App {...pageProps}>
      <TaxRateCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Veroprosentti-laskuri – Laske todellinen veroprosenttisi",
  title: "Veroprosentti-laskuri",
  description:
    "Laske efektiivinen veroprosenttisi nettopalkan ja maksamiesi verojen perusteella. Näet myös vuositason bruttotulot ja verot.",
  instructions:
    "Syötä kuukausittainen nettopalkka ja maksamasi verot. Laskuri näyttää bruttopalkan, veroprosentin sekä vuosiluvut.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
