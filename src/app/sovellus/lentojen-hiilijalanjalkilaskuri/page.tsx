import App from "@/components/Page";
import { Metadata } from "next";
import FlightCO2Calculator from "./co2Calculator";
import Info from "./info.mdx";

export default function Lentopaastolaskuri() {
  return (
    <App {...pageProps}>
      <FlightCO2Calculator />
    </App>
  );
}

const pageProps = {
  seoTitle:
    "Lentojen Hiilijalanjälkilaskuri - Laske Lennot CO2 Päästöt Helposti",
  title: "Lentojen Hiilijalanjälkilaskuri",
  description:
    "Laske lentomatkasi hiilijalanjälki helposti lentojen hiilijalanjälkilaskurilla. Syötä lähtö- ja määränpääkaupunkisi, ja saat tarkan arvion lennon aiheuttamista hiilidioksidipäästöistä. Ymmärrä lentämisen ympäristövaikutuksia ja tee vastuullisia matkustusvalintoja.",
  instructions:
    "Käytä lentojen hiilijalanjälkilaskuria selvittääksesi lentomatkasi ympäristövaikutukset. Syötä lähtö- ja määränpääkaupunkien lentokenttien tiedot, ja laskuri antaa sinulle tarkan arvion lennon hiilidioksidipäästöistä. Näin voit ymmärtää lentämisen ympäristövaikutuksia ja tehdä vastuullisempia matkustusvalintoja.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
