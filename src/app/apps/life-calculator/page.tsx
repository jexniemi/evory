import Page from "@/components/Page";
import { Metadata } from "next";
import ElamapaivaLaskuri from "./elamapaivaLaskuri";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function ElamapaivaLaskuriPage() {
  return (
    <Page {...pageProps}>
      <ElamapaivaLaskuri />
    </Page>
  );
}

const pageProps = {
  route: "life-calculator",
  title: "Life Calculator",
  seoTitle: "Life Calculator – How many days have you lived?",
  description:
    "Free life calculator: enter your birthday and get an accurate calculation of lived days, weeks, hours, heartbeats and breaths. How long until your next birthday?",
  instructions:
    "Enter your birthday and see your life statistics: days, hours, heartbeats and much more.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
