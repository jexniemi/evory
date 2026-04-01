import Page from "@/components/Page";
import { Metadata } from "next";
import Lampotilamuunnin from "./lampotilamuunnin";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function LampotilamuunninPage() {
  return (
    <Page {...pageProps}>
      <Lampotilamuunnin />
    </Page>
  );
}

const pageProps = {
  route: "temperature-converter",
  title: "Temperature Converter",
  seoTitle: "Temperature Converter – Convert Celsius, Fahrenheit and Kelvin",
  description:
    "Quickly convert temperature between Celsius, Fahrenheit and Kelvin. Enter a temperature and select a unit – all conversions are calculated automatically.",
  instructions:
    "Select the temperature unit, enter the value and instantly get the result in all three units.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
