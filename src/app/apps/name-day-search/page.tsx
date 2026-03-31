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
  seoTitle: "Nimipäivähakukone – Kenen nimipäivä on tänään?",
  description:
    "Ilmainen nimipäivähakukone: selvitä kenen nimipäivä on tänään tai etsi suomalaisen nimen nimipäivä hetkessä. Hae nimellä tai valitse päivämäärä.",
  instructions:
    "Hakukone näyttää automaattisesti tämän päivän nimipäivänimet. Voit myös hakea minkä tahansa nimen nimipäivän tai selata koko kalenteria päivämäärän mukaan.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
