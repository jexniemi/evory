import Countdown from "@/components/Countdown";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function TrumpTermCountdown() {
  return (
    <Page {...pageProps}>
      <Countdown
        targetDateName="End of Trump’s Term"
        targetDate={new Date("2029-01-20T12:00:00")} // Noon on Inauguration Day
      />
    </Page>
  );
}

const pageProps = {
  title: "Trump End of Term Countdown",
  seoTitle:
    "Trump End of Term Countdown - Track how much time is left in Trump's presidency.",
  description:
    "Wondering how long until the end of Donald Trump's second term? Use this real-time countdown to see the days, hours, and minutes remaining until Inauguration Day, January 20, 2029. Stay informed and engaged with the timeline of this presidential term.",
  instructions: `Welcome to the Trump Term Countdown! Track the real-time countdown to the end of Donald Trump's second presidential term, concluding on January 20, 2029. Watch the clock tick down and stay up to date on how much time is left in this presidency.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
