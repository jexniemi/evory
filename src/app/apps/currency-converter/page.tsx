import Page from "@/components/Page";
import { Metadata } from "next";
import Valuuttamuunnin from "./valuuttamuunnin";
import Info from "./info.mdx";

export default function ValuuttamuunninPage() {
  return (
    <Page {...pageProps}>
      <Valuuttamuunnin />
    </Page>
  );
}

const pageProps = {
  title: "Valuuttamuunnin",
  seoTitle: "Valuuttamuunnin – Muunna valuutat EUR, USD, GBP ja yli 20 muuta",
  description:
    "Ilmainen valuuttamuunnin: muunna euro, dollari, punta, kruunu, jeni ja yli 20 muuta valuuttaa. Viitteelliset kurssit, sopii budjetin suunnitteluun ja matkailuun.",
  instructions:
    "Syötä summa, valitse lähtö- ja kohdivaluutta. Tulos lasketaan viitteellisillä kursseilla.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
