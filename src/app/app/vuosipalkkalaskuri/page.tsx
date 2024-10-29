import Page from "@/components/Page";
import { Metadata } from "next";
import YearlyPayCalculator from "./yearlyPayCalculator";
import Info from "./info.mdx";

export default function YearlyPayCalculatorPage() {
  return (
    <Page {...pageProps}>
      <YearlyPayCalculator />
    </Page>
  );
}

const pageProps = {
  title: "Vuosipalkkalaskuri",
  seoTitle: "Vuosipalkkalaskuri - Laske vuosipalkkasi helposti",
  description:
    "Vuosipalkkalaskurin avulla voit helposti laskea vuosipalkkasi joko tuntipalkan tai kuukausipalkan perusteella.",
  instructions: `Vuosipalkka lasketaan joko kertomalla kuukausipalkkasi 12,5:llä (tai 12:lla, jos et saa lomarahaa) tai tuntipalkkasi vuotuisilla työtunneilla. Syötä tuntipalkkasi ja vuotuiset työtuntisi, tai vaihtoehtoisesti kuukausipalkkasi ja mahdolliset bonukset, niin laskuri laskee vuosipalkkasi. Voit kirjoittaa kenttään joko brutto- tai nettopalkkasi, riippuen siitä, mitä haluat laskea.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
