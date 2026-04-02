import Page from "@/components/Page";
import { Metadata } from "next";
import TimeZoneConverter from "./timeZoneConverter";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function TimeZoneConverterPage() {
  return (
    <Page {...pageProps}>
      <TimeZoneConverter />
    </Page>
  );
}

const pageProps = {
  seoTitle:
    "Time Zone Converter – Free Online Time Conversion Tool | ewory.com",
  title: "Time Zone Converter",
  description:
    "Convert time between world time zones instantly. Supports US, European, and Asian time zones with 12/24 hour display and day change detection.",
  instructions:
    "Enter the hour (0–23) and minute, select the source and destination time zones, and the converter instantly shows the equivalent time.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
