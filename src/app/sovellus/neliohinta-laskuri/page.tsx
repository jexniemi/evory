import App from "@/components/Page";
import { Metadata } from "next";
import PricePerSqmCalculator from "./pricePerSqmCalculator";
import Info from "./info.mdx";

export default function PricePerSqmPage() {
  return (
    <App {...pageProps}>
      <PricePerSqmCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Neliöhintalaskuri - Laske Asunnon Neliöhinta",
  title: "Neliöhintalaskuri",
  description:
    "Laske asunnon neliöhinta helposti. Syötä asunnon hinta ja pinta-ala, niin laskuri kertoo hinnan neliömetriä kohden.",
  instructions:
    "Syötä asunnon myyntihinta, pinta-ala neliömetreinä ja mahdollinen yhtiölainaosuus. Laskuri laskee velattoman neliöhinnan.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
