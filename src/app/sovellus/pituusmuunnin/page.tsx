import Page from "@/components/Page";
import { Metadata } from "next";
import Pituusmuunnin from "./pituusmuunnin";
import Info from "./info.mdx";

export default function PituusmuunninPage() {
  return (
    <Page {...pageProps}>
      <Pituusmuunnin />
    </Page>
  );
}

const pageProps = {
  title: "Pituusmuunnin",
  seoTitle: "Pituusmuunnin – Muunna cm, m, jalkaa, tuumaa, km ja mailia",
  description:
    "Ilmainen pituusmuunnin: muunna senttimetrit, metrit, jalat, tuumat, kilometrit ja mailit helposti. Syötä arvo ja valitse yksikkö – muunnos tapahtuu automaattisesti.",
  instructions:
    "Valitse lähtöyksikkö, syötä arvo ja näet kaikki muunnokset välittömästi.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
