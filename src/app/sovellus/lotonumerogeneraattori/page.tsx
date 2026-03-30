import Page from "@/components/Page";
import { Metadata } from "next";
import Lotonumerogeneraattori from "./lotonumerogeneraattori";
import Info from "./info.mdx";

export default function LotonumerogeneraattoriPage() {
  return (
    <Page {...pageProps}>
      <Lotonumerogeneraattori />
    </Page>
  );
}

const pageProps = {
  title: "Lotto-numerogeneraattori",
  seoTitle: "Lotto-numerogeneraattori – Arvo Lotto-numerot ilmaiseksi",
  description:
    "Ilmainen Lotto-numerogeneraattori: arvo 7 ainutkertaista numeroa väliltä 1–40 Suomen Loton säännöillä. Täysin satunnainen arvonta heti selaimen.",
  instructions:
    "Paina nappia ja generaattori arpoo sinulle seitsemän Lotto-numeroa. Tulokset tallentuvat historiaan.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
