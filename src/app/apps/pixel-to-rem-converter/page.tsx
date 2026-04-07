import Page from "@/components/Page";
import { Metadata } from "next";
import PixelToRemConverter from "./pixelToRemConverter";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function PixelToRemConverterPage() {
  return (
    <Page {...pageProps}>
      <PixelToRemConverter />
    </Page>
  );
}

const pageProps = {
  seoTitle: "PX to REM Converter – Free Pixel to REM Calculator | ewory.com",
  title: "Pixel to REM Converter",
  description:
    "Convert pixels to REM, EM, points, and viewport units. Set any base font size. Free online CSS unit converter for web developers.",
  instructions:
    "Enter a pixel value and base font size (default 16px). The converter shows equivalent values in REM, EM, PT, and VW units.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
