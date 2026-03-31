import App from "@/components/Page";
import { Metadata } from "next";
import DiceGenerator from "./diceGenerator";
import Info from "./info.mdx";

export default function DiceGeneratorPage() {
  return (
    <App {...pageProps}>
      <DiceGenerator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Noppageneraattori - Heitä Virtuaalisia Noppia",
  title: "Noppageneraattori",
  description:
    "Heitä virtuaalisia noppia verkossa. Valitse noppien määrä ja tyyppi. Sopii lautapeleihin, roolipeleihin ja muuhun noppien heittämiseen.",
  instructions:
    "Valitse noppien määrä ja sivujen lukumäärä, ja paina 'Heitä nopat!' -nappia. Laskuri näyttää tulokset animaation kera.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
