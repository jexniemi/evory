import App from "@/components/Page";
import { Metadata } from "next";
import ElectricityCalculator from "./electricityCalculator";
import Info from "./info.mdx";

export default function ElectricityPage() {
  return (
    <App {...pageProps}>
      <ElectricityCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Sähkölaskun laskuri - Laske Sähkönkulutus",
  title: "Sähkölaskun laskuri",
  description:
    "Laske sähkölaskunsa helposti tietäessäsi kulutuksen ja sähkön hinnan.",
  instructions:
    "Syötä sähkön kulutus kWh:ssa ja sähkön hinta €/kWh. Laskuri näyttää sähkölaskun summan.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
