import Page from "@/components/Page";
import { Metadata } from "next";
import Tuuliviimalaskuri from "./tuuliviimalaskuri";
import Info from "./info.mdx";

export default function TuuliviimalaskuriPage() {
  return (
    <Page {...pageProps}>
      <Tuuliviimalaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Tuuliviimalaskuri",
  seoTitle: "Tuuliviimalaskuri – Laske tuuliviima ja pakkasen tuntuma",
  description:
    "Ilmainen tuuliviimalaskuri: laske tuuliviimalämpötila lämpötilan ja tuulen nopeuden perusteella. Selvitä miltä pakkanen oikeasti tuntuu tuulessa.",
  instructions:
    "Syötä lämpötila ja tuulen nopeus. Laskuri käyttää kansainvälistä Environment Canada -kaavaa.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
