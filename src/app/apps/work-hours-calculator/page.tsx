import Page from "@/components/Page";
import { Metadata } from "next";
import Tyotuntilaskuri from "./tyotuntilaskuri";
import Info from "./info.mdx";

export default function TyotuntilaskuriPage() {
  return (
    <Page {...pageProps}>
      <Tyotuntilaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Work Hours Calculator",
  seoTitle: "Work Hours Calculator – Track Hours Worked and Earnings",
  description:
    "Free work hours calculator: enter your start and end times plus breaks to instantly calculate hours worked and optional earnings. Perfect for hourly workers and time tracking.",
  instructions:
    "Enter your start time, end time, and break duration. Add an hourly rate to calculate earnings.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
