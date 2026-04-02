import App from "@/components/Page";
import { Metadata } from "next";
import SocialSecurityCalculator from "./socialSecurityCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function SocialSecurityCalculatorPage() {
  return (
    <App {...pageProps}>
      <SocialSecurityCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Social Security Calculator – Estimate Your Benefits | ewory.com",
  title: "Social Security Calculator",
  description:
    "Estimate Social Security benefits based on claiming age. See how early or delayed retirement affects your monthly benefit. Free online calculator.",
  instructions:
    "Enter your expected monthly benefit at full retirement age (from your SSA statement), your current age, and your planned claiming age. The calculator shows your adjusted benefit.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
