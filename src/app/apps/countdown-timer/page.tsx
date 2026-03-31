import App from "@/components/Page";
import { Metadata } from "next";
import CountdownTimer from "./countdownTimer";
import Info from "./info.mdx";

export default function CountdownTimerPage() {
  return (
    <App {...pageProps}>
      <CountdownTimer />
    </App>
  );
}

const pageProps = {
  seoTitle: "Countdown Timer – Free Online Timer with Alarm | ewory.com",
  title: "Countdown Timer",
  description:
    "Set a countdown timer online for free. Enter hours, minutes, and seconds, then start the clock. Visual alert when time is up.",
  instructions:
    "Enter hours, minutes, and seconds, then click 'Start'. Use the pause and reset buttons to control the timer. A visual alert appears when the countdown reaches zero.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
