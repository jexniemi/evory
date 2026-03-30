import QRCodeGenerator from "@/components/pages/QRCodeGenerator";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function QRGenerator() {
  return (
    <Page {...pageProps}>
      <QRCodeGenerator />
    </Page>
  );
}

const pageProps = {
  title: "QR Generaattori",
  seoTitle: "QR Generaattori - Luo QR-koodi tekstistä",
  description:
    "Luo QR-koodi mistä tahansa tekstistä. Voit myös ladata QR-koodin .png kuvatiedostona.",
  instructions: `Kirjoita kenttään haluttu QR-koodin sisältö ja sovellus luo QR-koodin
  tekstin perusteella. Voit ladata QR-koodin .png kuvatiedostona.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
