import Countdown from "@/components/Countdown";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function ElectionCountdown() {
  return (
    <Page {...pageProps}>
      <Countdown
        targetDateName="Election Day"
        targetDate={new Date("2024-11-05T00:00:00")}
      />
    </Page>
  );
}

const pageProps = {
  title: "2024 Presidential Election Countdown",
  seoTitle:
    "2024 Presidential Election Countdown - See how many days are left until Election Day.",
  description:
    "How many days until the 2024 Presidential Election? Track the countdown to Election Day in real-time using our handy countdown tool. Watch the days, hours, and minutes decrease as we approach this pivotal moment in democracy. Get informed and prepare to make your voice heard!",
  instructions: `Welcome to the Presidential Election countdown! Excitedly track the decreasing days, hours, and minutes until the crucial Election Day on November 5, 2024. Set your start date, and the countdown will show you in real-time how much time is left until you can cast your vote. Start counting down the days now and prepare to participate in shaping the future! Additionally, you can embed this on Countdown on your website.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
