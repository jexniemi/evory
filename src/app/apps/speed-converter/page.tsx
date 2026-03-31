import Page from "@/components/Page";
import { Metadata } from "next";
import Nopeusmuunnin from "./nopeusmuunnin";
import Info from "./info.mdx";

export default function NopeusmuunninPage() {
  return (
    <Page {...pageProps}>
      <Nopeusmuunnin />
    </Page>
  );
}

const pageProps = {
  title: "Nopeusmuunnin",
  seoTitle: "Nopeusmuunnin – Muunna km/h, m/s, mph ja solmut",
  description:
    "Ilmainen nopeusmuunnin: muunna kilometrit tunnissa, metrit sekunnissa, mailia tunnissa, solmut ja jalat sekunnissa helposti. Sopii liikenteeseen, urheiluun ja navigointiin.",
  instructions:
    "Valitse lähtöyksikkö, syötä nopeus ja saat välittömästi kaikki muunnokset.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
