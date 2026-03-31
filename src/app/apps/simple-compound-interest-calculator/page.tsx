import App from "@/components/Page";
import { Metadata } from "next";
import CompoundCalculator from "./compoundCalculator";
import Info from "./info.mdx";

export default function CompoundPage() {
  return (
    <App {...pageProps}>
      <CompoundCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Korkoa korolle -laskuri – Laske sijoituksen kasvu",
  title: "Yksinkertainen korkoa korolle -laskuri",
  description:
    "Laske kuinka paljon sijoituksesi kasvaa korkoa korolle -periaatteella. Syötä alkupääoma, vuotuinen tuotto ja sijoitusaika – saat loppusaldon, korkotuoton ja tuplausajan.",
  instructions:
    "Syötä alkupääoma, vuotuinen tuottoprosentti ja sijoitusaika vuosissa. Laskuri näyttää loppusaldon, kertyneen koron, kokonaiskasvun ja pääoman tuplausajan.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
