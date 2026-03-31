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
    "Muunna tuntipalkka kuukausipalkaksi helposti. Syötä tuntipalkkasi ja viikkotyöaikasi, niin laskuri näyttää kuukausipalkkasi, päiväpalkkasi ja vuosipalkkasi.",
  instructions:
    "Syötä tuntipalkkasi ja viikkotyöaikasi. Laskuri laskee kuukausipalkkasi, päiväpalkkasi ja vuosipalkkasi. Yleisimmät viikkotyöajat ovat 37,5 h (toimisto, kauppa) ja 40 h (teollisuus).",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
