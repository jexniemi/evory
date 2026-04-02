import Page from "@/components/Page";
import { Metadata } from "next";
import EmergencyFundCalculator from "./emergencyFundCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function EmergencyFundCalculatorPage() {
  return (
    <Page {...pageProps}>
      <EmergencyFundCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Emergency Fund Calculator – How Much Should You Save? | ewory.com",
  title: "Emergency Fund Calculator",
  description:
    "Calculate your emergency fund target based on monthly expenses and desired coverage. Find out how long until you reach your goal.",
  instructions:
    "Enter your monthly expenses, how many months of coverage you want, your current savings, and how much you can save each month. The calculator shows your target and timeline.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
