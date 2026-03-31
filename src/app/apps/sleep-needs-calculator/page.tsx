import App from "@/components/Page";
import { Metadata } from "next";
import SleepCalculator from "./sleepCalculator";
import Info from "./info.mdx";

export default function SleepPage() {
  return (
    <App {...pageProps}>
      <SleepCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Sleep Needs Calculator – How Much Sleep Do You Need",
  title: "Sleep Needs Calculator",
  description:
    "Calculate how much sleep you need based on your daily exercise amount and intensity.",
  instructions:
    "Enter your daily exercise in minutes and workout intensity. The calculator shows the recommended amount of sleep.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
