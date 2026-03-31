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
    "Laske vuosipalkkasi kuukausipalkan tai tuntipalkan perusteella. Huomioi lomarahan, bonukset ja eri viikkotyöajat.",
  instructions:
    "Syötä kuukausipalkkasi tai tuntipalkkasi ja viikkotyöaikasi. Laskuri huomioi lomarahan (0,5 kk) ja mahdolliset bonukset.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
