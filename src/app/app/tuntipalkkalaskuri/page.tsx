import Page from "@/components/Page";
import { Metadata } from "next";
import HourlyPayCalculator from "./hourlyPayCalculator";
import Info from "./info.mdx";

export default function HourlyPayCalculatorPage() {
  return (
    <Page {...pageProps}>
      <HourlyPayCalculator />
    </Page>
  );
}

const pageProps = {
  title: "Tuntipalkkalaskuri",
  seoTitle: "Tuntipalkkalaskuri - Laske tuntipalkkasi helposti",
  description:
    "Tiedätkö miten muutetaan kuukausipalkka tuntipalkaksi? Tuntipalkkasovelluksen avulla muunnat helposti kuukausipalkkasi tuntipalkaksi.",
  instructions: `Kuukausipalkka muutetaan
      tuntipalkaksi jakamalla kuukausipalkka käyttäen työehtosopimuksessa
      määriteltyä jakajaa, tai muuten kuukausittaisten työtuntien
      mukaisesti. Keskiverto, päivätyötä (38,25 tuntia viikossa) tekevä
      työntekijä tekee keskimäärin 166 työtuntia kuukaudessa. Syötä
      kuukausipalkka ja kuukausittaiset työntuntisi niin laskuri laskee
      tuntipalkkasi. Voit käyttää joko brutto- tai nettopalkkaa laskuriin.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
