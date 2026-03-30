import Page from "@/components/Page";
import { Metadata } from "next";
import Satunnaislukugeneraattori from "./satunnaislukugeneraattori";
import Info from "./info.mdx";

export default function SatunnaislukugeneraattoriPage() {
  return (
    <Page {...pageProps}>
      <Satunnaislukugeneraattori />
    </Page>
  );
}

const pageProps = {
  title: "Satunnaislukugeneraattori",
  seoTitle: "Satunnaislukugeneraattori – Arvo satunnainen luku tai useita",
  description:
    "Ilmainen satunnaislukugeneraattori: arvo yksi tai useampi satunnainen luku haluamaltasi väliltä. Sopii arvontoihin, peleihin, joukkueiden jakoon ja tieteelliseen otantaan.",
  instructions:
    "Aseta minimi- ja maksimiarvot, valitse kuinka monta lukua haluat ja paina arvontanappia.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
