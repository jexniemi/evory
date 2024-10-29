import App from "@/components/Page";
import DailyCaloriesCalculator from "./dailyCaloriesCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function DailyCaloriesCalculatorPage() {
  return (
    <App {...pageProps}>
      <DailyCaloriesCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle:
    "Laske Päivittäinen Kaloritarpeesi | Helppo ja Tarkka Kalorintarvelaskuri",
  title: "Kalorintarvelaskuri",
  description:
    "Tervetuloa kalorintarvelaskuriimme! Tämä kätevä työkalu auttaa sinua laskemaan päivittäisen kaloritarpeesi perustuen ikääsi, sukupuoleesi, painoosi, pituuteesi ja aktiivisuustasoosi. Olitpa sitten tavoittelemassa painonpudotusta, painonhallintaa tai lihasmassan kasvattamista, laskurimme tarjoaa tarkan arvion tarvittavasta kalorimäärästäsi. Syötä tietosi ja saat yksilöllisen suosituksen, joka auttaa sinua saavuttamaan tavoitteesi.",
  instructions:
    "Tervetuloa kalorintarvelaskuriimme! Tämä kätevä työkalu auttaa sinua laskemaan päivittäisen kaloritarpeesi perustuen ikääsi, sukupuoleesi, painoosi, pituuteesi ja aktiivisuustasoosi. Olitpa sitten tavoittelemassa painonpudotusta, painonhallintaa tai lihasmassan kasvattamista, laskurimme tarjoaa tarkan arvion tarvittavasta kalorimäärästäsi. Syötä tietosi ja saat yksilöllisen suosituksen, joka auttaa sinua saavuttamaan tavoitteesi.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
