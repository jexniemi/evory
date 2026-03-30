import App from "@/components/Page";
import { Metadata } from "next";
import AlvCalculator from "./alvCalculator";
import Info from "./info.mdx";

export default function AlvCalculatorPage() {
  return (
    <App {...pageProps}>
      <AlvCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "ALV-laskuri - Laske Arvonlisävero Helposti",
  title: "ALV-laskuri",
  description:
    "Laske arvonlisävero (ALV) helposti. Selvitä ALV-summa, bruttohinta tai nettohinta Suomen ALV-kannoilla: 25,5 %, 14 % ja 10 %.",
  instructions:
    "Syötä hinta ja valitse sopiva ALV-kanta. Laskuri näyttää ALV-summan sekä silloin kun hinta ei sisällä ALV:tä (netto → brutto) että silloin kun hinta jo sisältää ALV:n (brutto → netto).",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
