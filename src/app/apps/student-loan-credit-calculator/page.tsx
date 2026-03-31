import Page from "@/components/Page";
import StudentLoanCalculator from "./studentLoanCalculator";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function StudentLoanCalculatorPage() {
  return (
    <Page {...pageProps}>
      <StudentLoanCalculator />
    </Page>
  );
}

const pageProps = {
  title: "Student Loan Credit Calculator",
  seoTitle:
    "Student Loan Credit Calculator - Calculate your student loan credit amount",
  description:
    "The student loan credit calculator easily calculates how much student loan credit you can receive based on the amount of student loan you have taken.",
  instructions: `
    The student loan credit calculator is a tool that helps students estimate the potential credit for repaying their student loan after graduation. The user enters the amount of student loan taken (or planned to take) and the scope of the degree in credit points. The calculator then computes the estimated credit amount. NOTE! This calculator is indicative – always check the latest information from the official source. This calculator currently applies only to higher education degrees.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
