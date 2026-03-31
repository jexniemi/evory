import App from "@/components/Page";
import { Metadata } from "next";
import SavingsGoalCalculator from "./savingsGoalCalculator";
import Info from "./info.mdx";

export default function SavingsGoalCalculatorPage() {
  return (
    <App {...pageProps}>
      <SavingsGoalCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Säästötavoitelaskuri - Kuinka Kauan Säästäminen Kestää?",
  title: "Säästötavoitelaskuri",
  description:
    "Laske kuinka kauan säästötavoitteen saavuttaminen kestää. Huomioi kuukausittainen säästösumma ja tuotto-odotus.",
  instructions:
    "Syötä säästötavoite euroissa, kuukausittainen säästösumma sekä arvioitu vuotuinen tuotto. Laskuri kertoo, kuinka kauan tavoitteen saavuttaminen kestää.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
