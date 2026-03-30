import Page from "@/components/Page";
import { Metadata } from "next";
import Horoskooppi from "./horoskooppi";
import Info from "./info.mdx";

export default function HoroskooppiPage() {
  return (
    <Page {...pageProps}>
      <Horoskooppi />
    </Page>
  );
}

const pageProps = {
  title: "Horoskooppi",
  seoTitle: "Horoskooppi – Kaikki horoskooppimerkit ja päivän numero",
  description:
    "Katso oma horoskooppimerkkisi kuvaus, yhteensopivat merkit, elementti ja päivän onnenluku. Kaikki 12 horoskooppimerkki yhdessä paikassa.",
  instructions: "Valitse horoskooppimerkkisi napsauttamalla symbolia.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
