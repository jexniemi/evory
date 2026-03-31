import Page from "@/components/Page";
import { Metadata } from "next";
import Pituusmuunnin from "./pituusmuunnin";
import Info from "./info.mdx";

export default function PituusmuunninPage() {
  return (
    <Page {...pageProps}>
      <Pituusmuunnin />
    </Page>
  );
}

const pageProps = {
  title: "Length Converter",
  seoTitle: "Length Converter – Convert cm, m, feet, inches, km and miles",
  description:
    "Free length converter: convert centimeters, meters, feet, inches, kilometers and miles easily. Enter value and select unit – conversion happens automatically.",
  instructions:
    "Select source unit, enter value and see all conversions immediately.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
