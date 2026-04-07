import Page from "@/components/Page";
import { Metadata } from "next";
import DogAgeCalculator from "./dogAgeCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function DogAgeCalculatorPage() {
  return (
    <Page {...pageProps}>
      <DogAgeCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Dog Age Calculator – Dog Years to Human Years | ewory.com",
  title: "Dog Age Calculator",
  description:
    "Convert your dog's age to human years based on breed size. Uses the latest veterinary research instead of the outdated 7-year rule.",
  instructions:
    "Select your dog's size category and enter their age in years. The calculator converts it to human-equivalent years and shows their life stage.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
