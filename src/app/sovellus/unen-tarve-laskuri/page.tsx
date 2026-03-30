import App from "@/components/Page";
import { Metadata } from "next";
import SleepCalculator from "./sleepCalculator";
import Info from "./info.mdx";

export default function SleepPage() {
  return (
    <App {...pageProps}>
      <SleepCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Unen tarve -laskuri - Kuinka Paljon Unta Tarvitset",
  title: "Unen tarve -laskuri",
  description:
    "Laske kuinka paljon unta tarvitset liikuntamäärän ja intensiteetin perusteella.",
  instructions:
    "Syötä päivittäinen liikuntamääräsi minuutteina ja harjoituksen intensiteetti. Laskuri näyttää suositellun unen määrän.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
