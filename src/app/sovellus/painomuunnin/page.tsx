import Page from "@/components/Page";
import { Metadata } from "next";
import Painomuunnin from "./painomuunnin";
import Info from "./info.mdx";

export default function PainomuunninPage() {
  return (
    <Page {...pageProps}>
      <Painomuunnin />
    </Page>
  );
}

const pageProps = {
  title: "Painomuunnin",
  seoTitle: "Painomuunnin – Muunna kg, g, lbs, stoonat ja tonnit",
  description:
    "Ilmainen painomuunnin: muunna kilogrammat, grammat, naudat (lbs), stoonat ja tonnit helposti. Syötä arvo, valitse yksikkö ja näe kaikki muunnokset.",
  instructions:
    "Valitse lähtöyksikkö, syötä arvo ja saat kaikki muunnokset heti.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
