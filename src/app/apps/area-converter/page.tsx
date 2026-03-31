import Page from "@/components/Page";
import { Metadata } from "next";
import Pintaalamunnin from "./pintaalamunnin";
import Info from "./info.mdx";

export default function PintaalamuunninPage() {
  return (
    <Page {...pageProps}>
      <Pintaalamunnin />
    </Page>
  );
}

const pageProps = {
  title: "Pinta-alamuunnin",
  seoTitle: "Pinta-alamuunnin – Muunna m², ft², hehtaari, acre ja muut",
  description:
    "Ilmainen pinta-alamuunnin: muunna neliömetrit, neliöjalat, hehtaarit, acret, neliökilometrit ja muut pinta-alayksiköt helposti.",
  instructions:
    "Valitse lähtöyksikkö, syötä pinta-ala ja saat kaikki muunnokset välittömästi.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
