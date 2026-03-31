import Page from "@/components/Page";
import MonthMachine from "./monthMachine";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function MonthMachinePage() {
  return (
    <Page {...pageProps}>
      <MonthMachine />
    </Page>
  );
}

const pageProps = {
  title: "Calendar Tool",
  seoTitle: "Calendar Tool – Days in months, calendar and leap years",
  description:
    "Find out how many days are in each month, check leap years, and browse monthly calendars for any year.",
  instructions:
    "Select the year with arrows and click on a month to see the number of days and calendar view. Today's date is highlighted in green.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
