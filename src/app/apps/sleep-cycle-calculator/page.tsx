import Page from "@/components/Page";
import { Metadata } from "next";
import Unisyklilaskuri from "./unisyklilaskuri";
import Info from "./info.mdx";

export default function UnisyklilaskuriPage() {
  return (
    <Page {...pageProps}>
      <Unisyklilaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Unisyklilaskuri",
  seoTitle: "Unisyklilaskuri – Milloin herätä tai mennä nukkumaan?",
  description:
    "Ilmainen unisyklilaskuri: syötä heräämisaika tai nukkumaanmenoaika ja laske optimaaliset ajat 90 minuutin unisyklien perusteella. Herää virkeänä!",
  instructions:
    "Valitse haluatko laskea nukkumaanmenoajan vai heräämisajan, syötä aika ja katso optimaaliset vaihtoehdot.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
