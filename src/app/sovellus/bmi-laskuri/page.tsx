import App from "@/components/Page";
import { Metadata } from "next";
import BmiCalculator from "./bmiCalculator";
import Info from "./info.mdx";

export default function BmiCalculatorPage() {
  return (
    <App {...pageProps}>
      <BmiCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "BMI-laskuri – Laske painoindeksisi ja normaalipainon vaihteluväli",
  title: "BMI-laskuri",
  description:
    "Laske painoindeksisi WHO:n luokittelulla ja selvitä normaalipainon vaihteluväli pituutesi perusteella.",
  instructions:
    "Syötä pituutesi senttimetreinä ja painosi kilogrammoina. Laskuri näyttää BMI-arvon, luokituksen sekä normaalipainon ala- ja ylärajan.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
