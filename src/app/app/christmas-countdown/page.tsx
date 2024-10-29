import Countdown from "@/components/Countdown";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function ChristmasCountdown() {
  return (
    <Page {...pageProps}>
      <Countdown
        targetDateName="Christmas Eve"
        targetDate={new Date("2024-12-24T00:00:00")}
      />
    </Page>
  );
}

const pageProps = {
  title: "Christmas Countdown",
  seoTitle: "Christmas Countdown - See how many days are left until Christmas.",
  description:
    "How many days until Christmas? Track your countdown to Christmas in real-time using our handy Christmas countdown tool. Watch the days, hours, and minutes decrease as Christmas Eve approaches. Start your holiday anticipation now and get ready to celebrate wholeheartedly! Use our Christmas countdown to bring festive joy.",
  instructions: `Welcome to the Christmas countdown! Excitedly track the decreasing days, hours, and minutes until the anticipated Christmas Eve. Set your start date, and the countdown will show you in real-time how much time is left until Christmas. Start counting down the days now and prepare to celebrate your Christmas with all your heart!`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
