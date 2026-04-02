import Page from "@/components/Page";
import { Metadata } from "next";
import Lampotilamuunnin from "./lampotilamuunnin";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function LampotilamuunninPage() {
  return (
    <Page {...pageProps}>
      <Lampotilamuunnin />
    </Page>
  );
}

const pageProps = {
  title: "Temperature Converter",
  seoTitle: "Temperature Converter – Convert Celsius, Fahrenheit and Kelvin",
  description:
    "Quickly convert temperature between Celsius, Fahrenheit and Kelvin. Enter a temperature and select a unit – all conversions are calculated automatically.",
  instructions:
    "Select the temperature unit, enter the value and instantly get the result in all three units.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
