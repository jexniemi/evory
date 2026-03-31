import Page from "@/components/Page";
import { Metadata } from "next";
import Nopeusmuunnin from "./nopeusmuunnin";
import Info from "./info.mdx";

export default function NopeusmuunninPage() {
  return (
    <Page {...pageProps}>
      <Nopeusmuunnin />
    </Page>
  );
}

const pageProps = {
  title: "Speed Converter",
  seoTitle: "Speed Converter – Convert km/h, m/s, mph and knots",
  description:
    "Free speed converter: easily convert kilometers per hour, meters per second, miles per hour, knots and feet per second. Great for traffic, sports and navigation.",
  instructions:
    "Select the source unit, enter the speed and instantly get all conversions.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
