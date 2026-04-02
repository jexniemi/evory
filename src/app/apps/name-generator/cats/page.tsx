import NameGenerator from "@/components/pages/NameGenerator";
import data from "@/data/namedays/cats";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function CatNameGenerator() {
  return (
    <Page {...pageProps}>
      <NameGenerator data={data} />
    </Page>
  );
}

const pageProps = {
  title: "Cat Name Generator",
  seoTitle: "Cat Name Generator - Find the Perfect Name for Your Cat",
  description:
    "Having trouble coming up with a name for your cat? Try using the name generator to find a suitable name for your pet. The name generator also tells you your cat's name day!",
  instructions: `Welcome to the world of cat lovers' names! Unleash your creativity and find the perfect name for your furry friend with our cat name generator. Enter your cat's personality, colors, and special features, and let the machine's magic create a unique name that perfectly captures the charm of your tail-wagger. Forget ordinary names and step into a fantasy world where your cat's name tells a story of the beautiful coexistence between human and pet. Start the adventure in the world of names with us – every cat deserves its own special name!`,
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
