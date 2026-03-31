import Page from "@/components/Page";
import { Metadata } from "next";
import RandomNumberGenerator from "./randomNumberGenerator";
import Info from "./info.mdx";

export default function RandomNumberGeneratorPage() {
  return (
    <Page {...pageProps}>
      <RandomNumberGenerator />
    </Page>
  );
}

const pageProps = {
  title: "Random Number Generator",
  seoTitle: "Random Number Generator – Generate random numbers",
  description:
    "Free random number generator: generate one or more random numbers from your desired range. Suitable for draws, games, team division, and scientific sampling.",
  instructions:
    "Set the minimum and maximum values, choose how many numbers you want, and press the draw button.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
