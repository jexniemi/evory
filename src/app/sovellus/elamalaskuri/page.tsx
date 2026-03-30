import Page from "@/components/Page";
import { Metadata } from "next";
import ElamapaivaLaskuri from "./elamapaivaLaskuri";
import Info from "./info.mdx";

export default function ElamapaivaLaskuriPage() {
  return (
    <Page {...pageProps}>
      <ElamapaivaLaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Elämälaskuri",
  seoTitle: "Elämälaskuri – Kuinka monta päivää olet elänyt?",
  description:
    "Ilmainen elämälaskuri: syötä syntymäpäivä ja saat tarkan laskelman elettyjen päivien, viikkojen, tuntien, sydämenlyöntien ja hengitysten määrästä. Kuinka kauan seuraavaan syntymäpäivään?",
  instructions:
    "Syötä syntymäpäiväsi ja katso elämäsi tilastot: päivät, tunnit, sydämenlyönnit ja paljon muuta.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
