import App from "@/components/Page";
import { Metadata } from "next";
import TipCalculator from "./tipCalculator";
import Info from "./info.mdx";

export default function TipCalculatorPage() {
  return (
    <App {...pageProps}>
      <TipCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Tippilaskuri - Laske Maksettava Juomaraha Helposti",
  title: "Tippilaskuri",
  description:
    "Laske tippi helposti ja tarkasti tippilaskurimme avulla. Syötä laskun summa, tippiprosentti, ja henkilöiden määrä jakamassa laskua saadaksesi selville tippi, kokonaissumma, ja summa per henkilö.",
  instructions:
    "Käytä tippilaskuria selvittääksesi kuinka paljon tippiä antaa ja kuinka paljon kukin henkilö maksaa laskusta. Syötä laskun summa, tippiprosentti, ja henkilöiden määrä jakamassa laskua. Laskuri antaa sinulle tarkan arvion tippisummasta, kokonaissummasta (sisältäen tipin), ja summasta per henkilö.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
