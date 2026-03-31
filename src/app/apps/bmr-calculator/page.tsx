import App from "@/components/Page";
import BMRCalculator from "./bmrCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function BMRCalculatorPage() {
  return (
    <App {...pageProps}>
      <BMRCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Perusaineenvaihduntalaskuri (BMR) – Laske lepokalorit",
  title: "Perusaineenvaihduntalaskuri",
  description:
    "Laske perusaineenvaihduntasi (BMR) Harris-Benedictin kaavalla. Syötä ikä, sukupuoli, paino ja pituus – saat BMR:n sekä arvion päivittäisestä kalorintarpeesta eri aktiivisuustasoilla.",
  instructions:
    "Syötä tietosi alle. Laskuri laskee perusaineenvaihduntasi Harris-Benedictin kaavalla ja näyttää päivittäisen kalorintarpeen kolmella eri aktiivisuustasolla.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
