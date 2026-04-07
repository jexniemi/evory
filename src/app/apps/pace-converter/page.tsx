import Page from "@/components/Page";
import { Metadata } from "next";
import PaceConverter from "./paceConverter";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function PaceConverterPage() {
  return (
    <Page {...pageProps}>
      <PaceConverter />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Pace Converter – Min/Mile to Min/Km & Race Times | ewory.com",
  title: "Pace Converter",
  description:
    "Convert running pace between minutes per mile and minutes per km. See estimated race times for 5K, 10K, half marathon, and marathon.",
  instructions:
    "Enter your pace in minutes and seconds, then choose whether it's per mile or per km. See converted pace, speed, and estimated race finish times.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
