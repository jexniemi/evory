import Page from "@/components/Page";
import { Metadata } from "next";
import PaivamaaraLaskuri from "./paivamaaraLaskuri";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function PaivamaaraLaskuriPage() {
  return (
    <Page {...pageProps}>
      <PaivamaaraLaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Date Calculator",
  seoTitle:
    "Date Calculator – Calculate the difference in days, weeks, and months",
  description:
    "Free date calculator: calculate how many days, weeks, or months are between two dates, or add days to your selected date.",
  instructions:
    "Select two dates to see the difference between them. You can also add or subtract days from any date.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
