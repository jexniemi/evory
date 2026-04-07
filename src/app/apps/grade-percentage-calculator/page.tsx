import Page from "@/components/Page";
import { Metadata } from "next";
import GradePercentageCalculator from "./gradePercentageCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function GradePercentageCalculatorPage() {
  return (
    <Page {...pageProps}>
      <GradePercentageCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Grade Percentage Calculator – Points to Grade & GPA | ewory.com",
  title: "Grade Percentage Calculator",
  description:
    "Calculate your grade percentage from points earned. See letter grade, GPA equivalent, and points needed for the next grade.",
  instructions:
    "Enter the points you earned and the total points possible. The calculator shows your percentage, letter grade, and GPA.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
