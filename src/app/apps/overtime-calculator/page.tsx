import App from "@/components/Page";
import { Metadata } from "next";
import OvertimeCalculator from "./overtimeCalculator";
import Info from "./info.mdx";

export default function OvertimeCalculatorPage() {
  return (
    <App {...pageProps}>
      <OvertimeCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Overtime Calculator – Calculate Overtime Pay Instantly | ewory.com",
  title: "Overtime Calculator",
  description:
    "Calculate overtime pay based on hourly rate, overtime hours, and multiplier. See weekly and annual earnings with time-and-a-half or double time.",
  instructions:
    "Enter your hourly rate, regular hours, overtime hours, and overtime multiplier (1.5× for time-and-a-half). The calculator shows your overtime rate and total weekly pay.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
