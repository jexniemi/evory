import NameGenerator from "@/components/pages/NameGenerator";
import data from "@/data/namedays/dogs";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function DogNameGenerator() {
  return (
    <Page {...pageProps}>
      <NameGenerator data={data} />
    </Page>
  );
}

const pageProps = {
  title: "Dog Name Generator",
  seoTitle: "Dog Name Generator - Find the Perfect Name for Your Dog",
  description:
    "Having trouble coming up with a name for your dog? Try using the name generator to find a suitable name for your pet. The name generator also tells you your dog's name day!",
  instructions: `
  The dog name generator is a fun and quick way to find the perfect name for your pet without unnecessary complications! Simply enter your preferences, mood, or even a random word into the generator, and it will instantly produce unique and cute dog names. Try it now, and give your pet a name that perfectly reflects its personality – no extra information needed!`,
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
