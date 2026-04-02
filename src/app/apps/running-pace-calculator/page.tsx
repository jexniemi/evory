import Page from "@/components/Page";
import { Metadata } from "next";
import RunningSpeedCalculator from "./runningSpeedCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function RunningSpeedCalculatorPage() {
  return (
    <Page {...pageProps}>
      <RunningSpeedCalculator />
    </Page>
  );
}

const pageProps = {
  title: "Running Pace Calculator",
  seoTitle:
    "Running Pace Calculator – Calculate Running Speed, Pace, and Estimated Times",
  description:
    "Calculate your running speed (km/h), pace (min/km), and estimated times for 5 km and 10 km distances. Enter running time and distance, and the calculator does the rest.",
  instructions:
    "Enter the time spent running in minutes and the distance run in kilometers. Get speed, pace, and estimated times for common race distances.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
