import Page from "@/components/Page";
import { Metadata } from "next";
import Unisyklilaskuri from "./unisyklilaskuri";
import Info from "./info.mdx";

export default function UnisyklilaskuriPage() {
  return (
    <Page {...pageProps}>
      <Unisyklilaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Sleep Cycle Calculator",
  seoTitle: "Sleep Cycle Calculator – When to Wake Up or Go to Sleep?",
  description:
    "Free sleep cycle calculator: enter wake-up time or bedtime and calculate optimal times based on 90-minute sleep cycles. Wake up refreshed!",
  instructions:
    "Choose if you want to calculate bedtime or wake-up time, enter the time, and see optimal options.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
