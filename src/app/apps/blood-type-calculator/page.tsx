import Page from "@/components/Page";
import { Metadata } from "next";
import BloodTypeCalculator from "./bloodTypeCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function BloodTypeCalculatorPage() {
  return (
    <Page {...pageProps}>
      <BloodTypeCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Blood Type Calculator – Predict Baby's Blood Type | ewory.com",
  title: "Blood Type Calculator",
  description:
    "Predict possible blood types for a child based on parents' blood types. See all ABO and Rh factor combinations with inheritance rules.",
  instructions:
    "Select each parent's blood type (A, B, AB, or O) and Rh factor (positive or negative). The calculator shows all possible blood types for their child.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
