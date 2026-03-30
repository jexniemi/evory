import Page from "@/components/Page";
import { Metadata } from "next";
import Makrolaskuri from "./makrolaskuri";
import Info from "./info.mdx";

export default function MakrolaskuriPage() {
  return (
    <Page {...pageProps}>
      <Makrolaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Makrolaskuri",
  seoTitle: "Makrolaskuri – Laske päivittäiset kalorit ja makrot",
  description:
    "Ilmainen makrolaskuri: laske päivittäinen kalorintarpeesi ja sopivat proteiini-, hiilihydraatti- ja rasvatarpeet tavoitteesi mukaan. Sopii laihduttajille, lihasmassan kasvattajille ja painon ylläpitäjille.",
  instructions:
    "Syötä painosi, valitse tavoitteesi ja aktiivisuustasosi. Saat laskelman päivittäisistä kaloreista ja makroravinteista.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
