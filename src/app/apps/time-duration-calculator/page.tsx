import Page from "@/components/Page";
import { Metadata } from "next";
import TimeDurationCalculator from "./timeDurationCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function TimeDurationCalculatorPage() {
  return (
    <Page {...pageProps}>
      <TimeDurationCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Time Duration Calculator – Hours Between Times | ewory.com",
  title: "Time Duration Calculator",
  description:
    "Calculate the duration between two times, or add and subtract hours and minutes from a time. Get results in hours, minutes, and decimal format.",
  instructions:
    "Enter a start time and end time to find the duration, or add/subtract hours and minutes from a starting time.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
