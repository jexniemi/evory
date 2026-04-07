import Page from "@/components/Page";
import { Metadata } from "next";
import AspectRatioCalculator from "./aspectRatioCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function AspectRatioCalculatorPage() {
  return (
    <Page {...pageProps}>
      <AspectRatioCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Aspect Ratio Calculator – Free Online Resolution Tool | ewory.com",
  title: "Aspect Ratio Calculator",
  description:
    "Calculate the aspect ratio of any width and height. Find the simplified ratio, decimal ratio, and megapixels for screens, images, and videos.",
  instructions:
    "Enter the width and height in pixels to see the simplified aspect ratio, decimal ratio, and total megapixels.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
