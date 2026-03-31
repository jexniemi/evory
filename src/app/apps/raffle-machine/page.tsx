import Page from "@/components/Page";
import { Metadata } from "next";
import Arvontakone from "./arvontakone";
import Info from "./info.mdx";

export default function ArvontakonePage() {
  return (
    <Page {...pageProps}>
      <Arvontakone />
    </Page>
  );
}

const pageProps = {
  title: "Arvontakone",
  seoTitle: "Arvontakone – Arvo voittaja listalta ilmaiseksi",
  description:
    "Ilmainen arvontakone: syötä osallistujien nimet tai kohteet, paina nappia ja arvo voittaja animoidulla arvonnalla. Sopii kilpailuihin, opettajille, joukkueiden jakoon ja somearpontoihin.",
  instructions:
    "Kirjoita osallistujat listaan (yksi per rivi) ja paina arvontanappia.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
