import Page from "@/components/Page";
import StudentLoanCalculator from "./studentLoanCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function StudentLoanCalculatorPage() {
  return (
    <Page {...pageProps}>
      <StudentLoanCalculator />
    </Page>
  );
}

const pageProps = {
  title: "Opintolainahyvityslaskuri",
  seoTitle: "Opintolainahyvityslaskuri - Laske opintolainahyvityksen määrä",
  description:
    "Opintolainahyvityslaskuri lasket helposti paljonko voit saada opintolainahyvitys nostamasi opintolainan määrän perusteella.",
  instructions: `
    Opintolainahyvityslaskuri on työkalu, joka auttaa opiskelijoita arvioimaan opintolainan takaisinmaksun mahdollista hyvitystä valmistumisen jälkeen. Käyttäjä syöttää laskuriin nostetun (tai nostettavan) opintolainan määrän ja tutkinnon laajuden opintopisteinä. Laskuri laskee sitten arvioidun hyvityksen määrän. HUOM! Tämä laskuri on suuntaa antava, tarkistathan aina viimeisimmät tiedot Kelan sivuilta. Tämä laskuri pätee toistaiseksi vain Suomessa suoritettuihin korkeakoulututkintoihin.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
