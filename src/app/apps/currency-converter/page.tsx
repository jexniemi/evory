import Page from "@/components/Page";
import { Metadata } from "next";
import Valuuttamuunnin from "./valuuttamuunnin";
import Info from "./info.mdx";

export default function ValuuttamuunninPage() {
  return (
    <Page {...pageProps}>
      <Valuuttamuunnin />
    </Page>
  );
}

const pageProps = {
  title: "Currency Converter",
  seoTitle:
    "Currency Converter – Convert currencies EUR, USD, GBP and over 20 more",
  description:
    "Free currency converter: convert euro, dollar, pound, crown, yen and over 20 other currencies. Indicative rates, suitable for budget planning and travel.",
  instructions:
    "Enter the amount, select source and target currency. The result is calculated with indicative rates.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
