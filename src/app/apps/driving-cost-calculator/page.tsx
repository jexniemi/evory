import App from "@/components/Page";
import { Metadata } from "next";
import FuelCostCalculator from "./fuelCostCalculator";
import Info from "./info.mdx";

export default function FuelCostPage() {
  return (
    <App {...pageProps}>
      <FuelCostCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle:
    "Ajokustannuslaskuri \u2013 Laske polttoainekulut ja vuosikustannukset",
  title: "Ajokustannuslaskuri",
  description:
    "Laske ajomatkan polttoainekustannus, kustannus per kilometri ja vuosikulut. Sy\u00f6t\u00e4 matka, kulutus, polttoaineen hinta ja vuosikilometrit.",
  instructions:
    "Sy\u00f6t\u00e4 ajomatkan pituus, auton kulutus, polttoaineen litrahinta ja arvioidut vuosikilometrit. Laskuri n\u00e4ytt\u00e4\u00e4 matkan kustannuksen, tarvittavan polttoaineen m\u00e4\u00e4r\u00e4n, kilometrikustannuksen ja vuosikulut.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
