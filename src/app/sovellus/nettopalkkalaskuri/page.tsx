import App from "@/components/Page";
import { Metadata } from "next";
import NetSalaryCalculator from "./netSalaryCalculator";
import Info from "./info.mdx";

export default function NetSalaryCalculatorPage() {
  return (
    <App {...pageProps}>
      <NetSalaryCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Nettopalkkalaskuri - Laske Nettopalkka Bruttopalkasta",
  title: "Nettopalkkalaskuri",
  description:
    "Laske nettopalkka bruttopalkasta. Selvitä kuinka paljon palkkaa jää käteen verojen ja sivukulujen jälkeen.",
  instructions:
    "Syötä bruttopalkka, veroprosentti sekä lakisääteiset sivukulut. Laskuri näyttää nettopalkkasi eli käteen jäävän summan kuukaudessa.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
