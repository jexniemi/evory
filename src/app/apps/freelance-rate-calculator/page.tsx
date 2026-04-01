import App from "@/components/Page";
import { Metadata } from "next";
import FreelanceRateCalculator from "./freelanceRateCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function FreelanceRateCalculatorPage() {
  return (
    <App {...pageProps}>
      <FreelanceRateCalculator />
    </App>
  );
}

const pageProps = {
  route: "freelance-rate-calculator",
  seoTitle:
    "Freelance Rate Calculator – Find Your Minimum Hourly Rate | ewory.com",
  title: "Freelance Rate Calculator",
  description:
    "Calculate the minimum hourly rate you need to charge as a freelancer based on your desired income, billable hours, and business expenses.",
  instructions:
    "Enter your desired annual income, billable hours per week, weeks you plan to work, and monthly business expenses. The calculator factors in self-employment tax to show your minimum viable rate.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
