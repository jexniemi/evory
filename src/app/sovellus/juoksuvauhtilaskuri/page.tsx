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
  seoTitle:
    "Juoksuvauhtilaskuri – Laske Helposti Juoksuvauhtisi Tunneissa per Kilometri",
  description:
    "Laske juoksuvauhtisi helposti ja tarkasti juoksuvauhtilaskurimme avulla. Syötä juostu aika ja matka saadaksesi nopean arvion juoksuvauhdistasi tunneissa, sekä minuuteissa per kilometri, sekä juoksutahdiast minuuteissa per kilometri. Paranna suoritustasi ja seuraa edistymistäsi kätevän laskurimme avulla.",
  instructions: `Juoksuvauhtilaskuri auttaa sinua laskemaan, kuinka nopeasti juokset yhden kilometrin. Syötä juoksuun käytetty aika minuuteissa ja juostu matka kilometreinä, ja saat tuloksen välittömästi. Laskuri on helppokäyttöinen ja tarjoaa nopean tavan seurata juoksusuoritustasi ja parantaa vauhtiasi.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
