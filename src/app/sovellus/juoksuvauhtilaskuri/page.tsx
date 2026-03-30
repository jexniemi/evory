import Page from "@/components/Page";
import { Metadata } from "next";
import RunningSpeedCalculator from "./runningSpeedCalculator";
import Info from "./info.mdx";

export default function RunningSpeedCalculatorPage() {
  return (
    <Page {...pageProps}>
      <RunningSpeedCalculator />
    </Page>
  );
}

const pageProps = {
  title: "Juoksuvauhtilaskuri",
  seoTitle: "Juoksuvauhtilaskuri – Laske juoksuvauhti, tahti ja arvioajat",
  description:
    "Laske juoksuvauhtisi (km/h), tahtisi (min/km) sekä arvioajat 5 km:n ja 10 km:n matkoille. Syötä juoksuaika ja matka, niin laskuri hoitaa loput.",
  instructions:
    "Syötä juoksuun käytetty aika minuutteina ja juostu etäisyys kilometreinä. Saat vauhdin, tahdin ja arvioajat yleisille kilpailumatkoille.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
