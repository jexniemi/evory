import App from "@/components/Page";
import BMRCalculator from "./bmrCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function BMRCalculatorPage() {
  return (
    <App {...pageProps}>
      <BMRCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle:
    "Laske Perusaineenvaihduntasi (BMR) | Tarkka Perusaineenvaihduntalaskuri",
  title: "Perusaineenvaihduntalaskuri",
  description:
    "Perusaineenvaihduntalaskuri on helppokäyttöinen työkalu, joka auttaa sinua selvittämään päivittäisen kaloritarpeesi levossa. Syöttämällä yksinkertaiset tiedot, kuten ikä, sukupuoli, paino ja pituus, laskuri arvioi perusaineenvaihduntasi (BMR) tarkasti. Tämä tieto on hyödyllinen painonhallinnassa, ravitsemussuunnitelmien laatimisessa ja yleisen hyvinvoinnin seurannassa. Käytä laskuriamme optimoidaksesi ruokavaliosi ja liikuntatottumuksesi tavoitteidesi saavuttamiseksi. Aloita nyt ja ota ensimmäinen askel kohti terveellisempää elämää!",
  instructions:
    "Perusaineenvaihduntalaskuri on helppokäyttöinen työkalu, joka auttaa sinua selvittämään päivittäisen kaloritarpeesi levossa. Syöttämällä yksinkertaiset tiedot, kuten ikä, sukupuoli, paino ja pituus, laskuri arvioi perusaineenvaihduntasi (BMR) tarkasti. Tämä tieto on hyödyllinen painonhallinnassa, ravitsemussuunnitelmien laatimisessa ja yleisen hyvinvoinnin seurannassa. Käytä laskuriamme optimoidaksesi ruokavaliosi ja liikuntatottumuksesi tavoitteidesi saavuttamiseksi. Aloita nyt ja ota ensimmäinen askel kohti terveellisempää elämää!",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
