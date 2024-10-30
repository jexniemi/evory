import Page from "@/components/Page";
import { Metadata } from "next";
import RunningSpeedCalculator from "./runningSpeedCalculator";
import Info from "./info.mdx";

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
    "Running Pace Calculator – Easily Calculate Your Running Pace in Hours per Mile",
  description:
    "Quickly and accurately calculate your running pace with our running pace calculator. Enter your run time and distance to get a quick estimate of your pace in hours and minutes per mile. Track your progress and improve your performance with our convenient calculator.",
  instructions: `The Running Pace Calculator helps you determine how quickly you run one mile. Enter your running time in minutes and the distance run in miles to get an immediate result. The calculator is easy to use and offers a fast way to track your running performance and improve your pace.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
