import Page from "@/components/Page";
import { Metadata } from "next";
import Tyotuntilaskuri from "./tyotuntilaskuri";
import Info from "./info.mdx";

export default function TyotuntilaskuriPage() {
  return (
    <Page {...pageProps}>
      <Tyotuntilaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Työtuntilaskuri",
  seoTitle: "Työtuntilaskuri – Laske tehdyt työtunnit ja ansiot",
  description:
    "Ilmainen työtuntilaskuri: syötä töihin tulo- ja lähtöaika sekä tauot, niin lasket välittömästi tehdyt työtunnit ja halutessasi ansiot. Sopii tuntipalkkaisille ja tuntiseurantaan.",
  instructions:
    "Syötä töihin tuloaika, lähtöaika ja taukojen pituus. Lisää tuntipalkka ansiolaskelmaa varten.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
