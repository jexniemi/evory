import App from "@/components/Page";
import { Metadata } from "next";
import CalorieCalculator from "./calorieCalculator";
import Info from "./info.mdx";

export default function CaloriePage() {
  return (
    <App {...pageProps}>
      <CalorieCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Päivittäinen kalorintarve -laskuri – Laske kaloritarpeesi",
  title: "Päivittäinen kalorintarve -laskuri",
  description:
    "Laske päivittäinen kalorintarpeesi Mifflin-St Jeor -kaavalla. Valitse aktiivisuustasosi ja saat tarkan arvion ylläpitokalorien lisäksi tavoitteet painon pudotukseen ja lihasmassan kasvatukseen.",
  instructions:
    "Syötä tietosi ja valitse aktiivisuustasosi. Laskuri näyttää päivittäisen kalorintarpeesi sekä suositellut kalorimäärät laihdutukseen ja lihasmassan kasvatukseen.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
