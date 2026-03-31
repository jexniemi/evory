import Page from "@/components/Page";
import GpaCalculator from "@/components/GPACalculator";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function GPACalculatorPage() {
  return (
    <Page {...pageProps}>
      <GpaCalculator />
    </Page>
  );
}

const pageProps = {
  title: "GPA Calculator",
  seoTitle: "GPA Calculator – Calculate Your GPA Easily",
  description:
    "Calculate your GPA easily and quickly with our GPA calculator. Enter course grades and credits to get an accurate estimate of your average. Track your progress and set goals for your academic success with our efficient calculator. The calculator is suitable for university, high school, and elementary school studies.",
  instructions: `The GPA calculator is a versatile tool that helps university, high school, and elementary school students calculate the average of course grades and credits easily and quickly. Just enter your course grades and their credits or hours, and the calculator will give an accurate estimate of your average. This helps you track your academic success, set goals, and plan your future studies more efficiently.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
