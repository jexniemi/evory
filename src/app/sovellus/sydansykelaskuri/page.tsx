import Page from "@/components/Page";
import { Metadata } from "next";
import Sydansykelaskuri from "./sydansykelaskuri";
import Info from "./info.mdx";

export default function SydansykelaskuriPage() {
  return (
    <Page {...pageProps}>
      <Sydansykelaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Sydänsykelaskuri",
  seoTitle: "Sydänsykelaskuri – Laske sykevyöhykkeet iän ja leposykkeen mukaan",
  description:
    "Ilmainen sydänsykelaskuri: laske 5 sykevyöhykettä ikäsi ja leposykkeen perusteella Karvosen kaavalla. Optimoi harjoittelusi oikeille intensiteettialueille.",
  instructions:
    "Syötä ikäsi ja leposykeesi. Voit myös syöttää mitatun maksimisykkeesi tarkempia tuloksia varten.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
