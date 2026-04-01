import App from "@/components/Page";
import { Metadata } from "next";
import PaycheckCalculator from "./paycheckCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function PaycheckCalculatorPage() {
  return (
    <App {...pageProps}>
      <PaycheckCalculator />
    </App>
  );
}

const pageProps = {
  route: "paycheck-calculator",
  seoTitle: "Paycheck Calculator – Free Take-Home Pay Estimator | ewory.com",
  title: "Paycheck Calculator",
  description:
    "Estimate your take-home pay after federal tax, state tax, FICA, and 401(k) deductions. Free biweekly and monthly net pay calculator.",
  instructions:
    "Enter your annual salary, federal and state tax rates, and 401(k) contribution percentage. The calculator shows your biweekly and monthly take-home pay.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
