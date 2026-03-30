import App from "@/components/Page";
import { Metadata } from "next";
import WaterIntakeCalculator from "./waterIntakeCalculator";
import Info from "./info.mdx";

export default function WaterIntakeCalculatorPage() {
  return (
    <App {...pageProps}>
      <WaterIntakeCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Vesitarvelaskuri - Laske Päivittäinen Vedentarve",
  title: "Vesitarvelaskuri",
  description:
    "Laske päivittäinen vedentarpeesi painon ja aktiivisuustason perusteella. Selvitä, kuinka paljon vettä sinun tulisi juoda päivässä.",
  instructions:
    "Syötä painosi ja valitse aktiivisuustasosi. Laskuri arvioi, kuinka paljon vettä sinun tulisi juoda päivittäin.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
