import Page from "@/components/Page";
import { Metadata } from "next";
import CatAgeCalculator from "./catAgeCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function CatAgeCalculatorPage() {
  return (
    <Page {...pageProps}>
      <CatAgeCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Cat Age Calculator – Cat Years to Human Years | ewory.com",
  title: "Cat Age Calculator",
  description:
    "Convert your cat's age to human years using veterinary guidelines. See your cat's life stage and human-equivalent age instantly.",
  instructions:
    "Enter your cat's age in years. The calculator shows the equivalent human age and current life stage based on AAHA guidelines.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
