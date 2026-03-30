import Page from "@/components/Page";
import { Metadata } from "next";
import Kalorienpolttolaskuri from "./kalorienpolttolaskuri";
import Info from "./info.mdx";

export default function KalorienpolttolaskuriPage() {
  return (
    <Page {...pageProps}>
      <Kalorienpolttolaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Kalorienpolttolaskuri",
  seoTitle: "Kalorienpolttolaskuri – Laske liikunnan kalorinkulutus",
  description:
    "Ilmainen kalorienpolttolaskuri: laske kuinka monta kaloria poltat eri aktiviteeteissa MET-arvojen avulla. Syötä paino, valitse laji ja kesto.",
  instructions:
    "Syötä painosi, valitse aktiviteetti ja harjoituksen kesto minuutteina.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
