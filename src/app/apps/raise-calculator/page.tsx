import App from "@/components/Page";
import { Metadata } from "next";
import RaiseCalculator from "./raiseCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function RaiseCalculatorPage() {
  return (
    <App {...pageProps}>
      <RaiseCalculator />
    </App>
  );
}

const pageProps = {
  title: "Raise Calculator",
  seoTitle: "Raise Calculator – Free Salary Increase Estimator | ewory.com",
  description:
    "Calculate your new salary after a raise and see annual and monthly income increase instantly. Free online raise calculator.",
  instructions:
    "Enter your current annual salary and raise percentage. The calculator instantly shows your new salary, annual increase, and monthly increase.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
