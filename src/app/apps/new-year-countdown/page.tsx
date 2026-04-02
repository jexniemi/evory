import App from "@/components/Page";
import { Metadata } from "next";
import NewYearCountdown from "./newYearCountdown";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function NewYearCountdownPage() {
  return (
    <App {...pageProps}>
      <NewYearCountdown />
    </App>
  );
}

const pageProps = {
  title: "New Year Countdown",
  seoTitle: "New Year Countdown – Live Countdown to New Year 2026 | ewory.com",
  description:
    "Live countdown to the New Year. See exactly how many days, hours, minutes, and seconds until midnight on January 1st.",
  instructions:
    "The countdown updates every second showing days, hours, minutes, and seconds until the next New Year. No input needed!",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
