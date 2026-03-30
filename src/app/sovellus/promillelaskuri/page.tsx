import Page from "@/components/Page";
import { Metadata } from "next";
import Promillelaskuri from "./promillelaskuri";
import Info from "./info.mdx";

export default function PromillelaskuriPage() {
  return (
    <Page {...pageProps}>
      <Promillelaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Promillelaskuri",
  seoTitle: "Promillelaskuri – Arvioi veren alkoholipitoisuus Widmark-kaavalla",
  description:
    "Laske arvioitu promillemäärä sukupuolen, painon, juotujen annosten ja kuluneen ajan perusteella. Laskuri näyttää myös arvioidun ajan selviämiseen ja ajokuntoon.",
  instructions:
    "Syötä tietosi ja saat heti arvion promilleistasi. Tulos on vain suuntaa-antava — älä aja, jos olet nauttinut alkoholia.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
