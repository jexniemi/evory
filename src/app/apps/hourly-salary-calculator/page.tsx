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
    "Muunna kuukausipalkka tuntipalkaksi helposti. Syötä kuukausipalkkasi ja viikkotyöaikasi, niin laskuri näyttää tuntipalkkasi, päiväpalkkasi ja vuosipalkkasi.",
  instructions:
    "Syötä kuukausipalkkasi ja viikkotyöaikasi. Laskuri laskee tuntipalkkasi, päiväpalkkasi ja vuosipalkkasi. Yleisimmät viikkotyöajat ovat 37,5 h (toimisto, kauppa) ja 40 h (teollisuus).",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
