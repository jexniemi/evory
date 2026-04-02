import Countdown from "@/components/Countdown";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function ChristmasCountdown() {
  return (
    <Page {...pageProps}>
      <Countdown
        targetDateName="Christmas Eve"
        targetDate={new Date("2026-12-24T00:00:00")}
      />
    </Page>
  );
}

const pageProps = {
  title: "Christmas Countdown",
  seoTitle: "Christmas Countdown - See how many days until Christmas.",
  description:
    "How many days until Christmas? Follow your anticipation of Christmas in real-time using our convenient Christmas countdown. You will see the countdown of days, hours, and minutes towards Christmas Eve. Start waiting for Christmas now and prepare to celebrate with all your heart! Use our Christmas countdown and bring Christmas joy with your calculator",
  instructions: `Welcome to the Christmas countdown! Follow with excitement the countdown of days, hours, and minutes towards the awaited Christmas Eve. Enter your start date, and the countdown will show in real-time how long until Christmas. Start counting the anticipation now and prepare to celebrate your Christmas with all your heart!`,
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
