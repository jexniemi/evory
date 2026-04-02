import Page from "@/components/Page";
import { Metadata } from "next";
import Arvontakone from "./arvontakone";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function ArvontakonePage() {
  return (
    <Page {...pageProps}>
      <Arvontakone />
    </Page>
  );
}

const pageProps = {
  title: "Raffle Machine",
  seoTitle: "Raffle Machine – Draw a Winner from a List for Free",
  description:
    "Free raffle machine: enter participants' names or items, press the button and draw a winner with an animated draw. Suitable for contests, teachers, team divisions, and social media raffles.",
  instructions:
    "Write the participants in the list (one per line) and press the draw button.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
