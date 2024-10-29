import Page from "@/components/Page";
import NameSearchEngine from "@/components/pages/NameSearchEngine";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function NameDaySearch() {
  return (
    <Page {...pageProps}>
      <NameSearchEngine />
    </Page>
  );
}

const pageProps = {
  title: "Nimipäivähakukone",
  seoTitle: "Nimipäivähakukone - Hae suomalaisen nimen nimipäivää",
  description:
    "Tiedätkö kenen nimipäivä on tänään? Hae nimipäivää päivämäärän tai nimen perusteella.",
  instructions: `
  Nimipäivähakukone tarjoaa käyttäjille mahdollisuuden etsiä suomalaisen nimen nimipäivää vaivattomasti. Kone mahdollistaa hakemisen sekä nimen että päivämäärän perusteella. Voit siis selvittää, milloin tietty suomalainen nimi juhlii nimipäiväänsä tai vastaavasti löytää nimipäivän ja siihen liittyvän nimen haluamallesi päivälle. Näin palvelu tarjoaa kätevän tavan tutkia suomalaisten nimien nimipäiviä ja juhlistaa niitä tarkoituksenmukaisesti.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
