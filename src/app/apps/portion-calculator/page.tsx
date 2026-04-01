import Page from "@/components/Page";
import { Metadata } from "next";
import Annoslaskuri from "./annoslaskuri";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function AnnoslaskuriPage() {
  return (
    <Page {...pageProps}>
      <Annoslaskuri />
    </Page>
  );
}

const pageProps = {
  route: "portion-calculator",
  title: "Portion Calculator",
  seoTitle: "Portion Calculator – Scale Recipe to the Right Serving Size",
  description:
    "Free portion calculator: easily change the serving size of a recipe. Enter the ingredients and original serving size, select the desired serving size, and get the scaled amounts automatically.",
  instructions:
    "Enter the original serving size, desired serving size, and ingredients. Scaled amounts are calculated automatically.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
