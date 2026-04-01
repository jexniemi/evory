import Page from "@/components/Page";
import { Metadata } from "next";
import BloodPressureChecker from "./bloodPressureChecker";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function BloodPressureCheckerPage() {
  return (
    <Page {...pageProps}>
      <BloodPressureChecker />
    </Page>
  );
}

const pageProps = {
  route: "blood-pressure-checker",
  seoTitle: "Blood Pressure Checker – Free Online BP Category Tool | ewory.com",
  title: "Blood Pressure Checker",
  description:
    "Check your blood pressure category based on AHA guidelines. Enter systolic and diastolic readings to see if your BP is normal, elevated, or hypertensive.",
  instructions:
    "Enter your systolic (upper) and diastolic (lower) blood pressure readings in mmHg. The tool will classify your reading according to American Heart Association guidelines.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
