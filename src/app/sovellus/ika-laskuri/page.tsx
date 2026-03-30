import App from "@/components/Page";
import { Metadata } from "next";
import AgeCalculator from "./ageCalculator";
import Info from "./info.mdx";

export default function AgeCalculatorPage() {
  return (
    <App {...pageProps}>
      <AgeCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Ikälaskuri - Laske Ikäsi Tarkasti Syntymäpäivästä",
  title: "Ikälaskuri",
  description:
    "Laske ikäsi tarkasti vuosina, kuukausina ja päivinä. Syötä syntymäpäiväsi ja selvitä tarkka ikäsi.",
  instructions:
    "Valitse syntymäpäiväsi, kuukausi ja vuosi. Laskuri näyttää tarkan ikäsi vuosina, kuukausina ja päivinä.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
