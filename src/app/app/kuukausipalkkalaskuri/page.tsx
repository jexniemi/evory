import Page from "@/components/Page";
import MonthlyPayCalculator from "./monthlyPayCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function MonthlyPayCalculatorPage() {
  return (
    <Page {...pageProps}>
      <MonthlyPayCalculator />
    </Page>
  );
}

const pageProps = {
  title: "Kuukausipalkkalaskuri",
  seoTitle: "Kuukausipalkkalaskuri - Laske kuukausipalkka helposti",
  description:
    "Tiedätkö miten muutetaan tuntipalkka kuukausipalkaksi? Kuukausipalkkalaskurin avulla muunnat helposti tuntipalkan kuukausipalkaksi.",
  instructions: `Tuntipalkka muutetaan
  kuukausipalkaksi kertomalla tuntipalkka kuukausittaisilla
  työtunneilla. Keskiverto, päivätyötä (38,25 tuntia viikossa) tekevä
  työntekijä tekee keskimäärin 166 työtuntia kuukaudessa. Syötä
  tuntipalkkasi ja kuukausittaiset työtuntisi niin laskuri laskee
  kuukausipalkkasi. Voit kirjoittaa kenttään joko brutto- tai nettopalkkasi, riippuen siitä, mitä haluat laskea.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
