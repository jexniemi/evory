import Page from "@/components/Page";
import { Metadata } from "next";
import Tuuliviimalaskuri from "./tuuliviimalaskuri";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function TuuliviimalaskuriPage() {
  return (
    <Page {...pageProps}>
      <Tuuliviimalaskuri />
    </Page>
  );
}

const pageProps = {
  route: "wind-chill-calculator",
  title: "Wind Chill Calculator",
  seoTitle: "Wind Chill Calculator – Calculate Apparent Temperature in Wind",
  description:
    "Free wind chill calculator: calculate the apparent temperature based on temperature and wind speed. Find out what cold really feels like in the wind.",
  instructions:
    "Enter temperature and wind speed. The calculator uses the international Environment Canada formula.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
