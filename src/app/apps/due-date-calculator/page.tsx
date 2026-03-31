import Page from "@/components/Page";
import { Metadata } from "next";
import DueDateCalculator from "./dueDateCalculator";
import Info from "./info.mdx";

export default function DueDateCalculatorPage() {
  return (
    <Page {...pageProps}>
      <DueDateCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle:
    "Due Date Calculator – Free Pregnancy Due Date Estimator | ewory.com",
  title: "Due Date Calculator",
  description:
    "Calculate your pregnancy due date using Naegele's rule. Enter your last menstrual period to find your estimated delivery date, current week, and trimester.",
  instructions:
    "Enter the first day of your last menstrual period (LMP). The calculator estimates your due date, current pregnancy week, days remaining, and trimester.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
