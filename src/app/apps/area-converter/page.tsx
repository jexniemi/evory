import Page from "@/components/Page";
import { Metadata } from "next";
import Pintaalamunnin from "./pintaalamunnin";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function PintaalamuunninPage() {
  return (
    <Page {...pageProps}>
      <Pintaalamunnin />
    </Page>
  );
}

const pageProps = {
  title: "Area Converter",
  seoTitle: "Area Converter – Convert m², ft², hectare, acre and more",
  description:
    "Free area converter: easily convert square meters, square feet, hectares, acres, square kilometers and other area units.",
  instructions:
    "Select the source unit, enter the area and get all conversions instantly.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
