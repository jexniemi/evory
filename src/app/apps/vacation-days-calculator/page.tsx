import Countdown from "@/components/Countdown";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function SummerVacationCountdown() {
  return (
    <Page {...pageProps}>
      <Countdown
        targetDateName="Until Summer Vacation"
        targetDate={new Date("2026-06-01T00:00:00")}
        allowUserSelection
      />
    </Page>
  );
}

const pageProps = {
  title: "Summer Vacation Countdown",
  seoTitle:
    "Summer Vacation Countdown – Easily Count Days, Hours and Minutes Until Vacation",
  description:
    "Track your wait until summer vacation in real time using our handy countdown calculator. We show you the days, hours and minutes ticking down toward your well-earned time off. Start counting now and get ready for a relaxing summer vacation!",
  instructions: `Welcome to the summer vacation countdown! This handy calculator shows in real time how many days, hours and minutes remain until your well-earned summer vacation. School summer vacations begin in most of the country on June 1, 2026, but you can also select your own vacation start date. Choose your desired date and start counting!`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
