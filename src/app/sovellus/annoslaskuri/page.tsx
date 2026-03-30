import Page from "@/components/Page";
import { Metadata } from "next";
import Annoslaskuri from "./annoslaskuri";
import Info from "./info.mdx";

export default function AnnoslaskuriPage() {
  return (
    <Page {...pageProps}>
      <Annoslaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Annoslaskuri",
  seoTitle: "Annoslaskuri – Skaalaa resepti oikealle annoskoalle",
  description:
    "Ilmainen annoslaskuri: muuta reseptin annoskoko helposti. Syötä ainesosat ja alkuperäinen annoskoko, valitse haluttu annoskoko ja saat skaalatut määrät automaattisesti.",
  instructions:
    "Syötä alkuperäinen annoskoko, haluttu annoskoko ja ainesosat. Skaalatut määrät lasketaan automaattisesti.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
