import Page from "@/components/Page";
import { Metadata } from "next";
import Lotonumerogeneraattori from "./lotonumerogeneraattori";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function LotonumerogeneraattoriPage() {
  return (
    <Page {...pageProps}>
      <Lotonumerogeneraattori />
    </Page>
  );
}

const pageProps = {
  route: "lottery-number-generator",
  title: "Lottery Number Generator",
  seoTitle: "Lottery Number Generator – Draw Lotto numbers for free",
  description:
    "Free Lotto number generator: draw 7 unique numbers from 1–40 according to Finnish Lotto rules. Completely random draw right in the browser.",
  instructions:
    "Press the button and the generator draws seven Lotto numbers for you. Results are saved to history.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
