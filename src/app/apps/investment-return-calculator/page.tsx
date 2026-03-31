import App from "@/components/Page";
import { Metadata } from "next";
import RoiCalculator from "./roiCalculator";
import Info from "./info.mdx";

export default function RoiPage() {
  return (
    <App {...pageProps}>
      <RoiCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Sijoitustuoton laskuri – Laske ROI ja vuosituotto",
  title: "Sijoitustuoton laskuri",
  description:
    "Laske sijoituksesi tuottoprosentti (ROI) ja vuosituotto (CAGR). Syötä alkusijoitus, nykyarvo ja sijoitusaika – saat voiton, kokonaistuoton ja annualisoidun tuottoprosentin.",
  instructions:
    "Syötä alkusijoituksen arvo, nykyinen arvo tai myyntihinta ja sijoitusaika. Laskuri näyttää voiton euroissa, kokonaistuottoprosentin ja vuosittaisen tuoton.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
