import Page from "@/components/Page";
import { Metadata } from "next";
import Lampotilamuunnin from "./lampotilamuunnin";
import Info from "./info.mdx";

export default function LampotilamuunninPage() {
  return (
    <Page {...pageProps}>
      <Lampotilamuunnin />
    </Page>
  );
}

const pageProps = {
  title: "Lämpötilamuunnin",
  seoTitle: "Lämpötilamuunnin – Muunna Celsius, Fahrenheit ja Kelvin",
  description:
    "Muunna lämpötila nopeasti Celsiuksen, Fahrenheitin ja Kelvinin välillä. Syötä lämpötila ja valitse yksikkö – kaikki muunnokset lasketaan automaattisesti.",
  instructions:
    "Valitse lämpötilayksikkö, syötä arvo ja saat tuloksen kaikissa kolmessa yksikössä välittömästi.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
