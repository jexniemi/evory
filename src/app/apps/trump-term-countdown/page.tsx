import Countdown from "@/components/Countdown";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function TrumpTermCountdown() {
  return (
    <Page {...pageProps}>
      <Countdown
        targetDateName="End of Trump's Second Term"
        targetDate={new Date("2029-01-20T12:00:00")}
      />
    </Page>
  );
}

const pageProps = {
  title: "Trump Term Countdown",
  seoTitle:
    "Trump Term Countdown – Days Until End of Trump's Second Term | ewory.com",
  description:
    "Live countdown to January 20, 2029 — the end of Donald Trump's second presidential term. See exactly how many days, hours, minutes, and seconds remain.",
  instructions:
    "This countdown shows the exact time remaining until January 20, 2029, when Donald Trump's second presidential term is constitutionally scheduled to end.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
