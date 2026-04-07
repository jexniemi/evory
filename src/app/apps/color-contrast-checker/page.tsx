import Page from "@/components/Page";
import { Metadata } from "next";
import ColorContrastChecker from "./colorContrastChecker";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function ColorContrastCheckerPage() {
  return (
    <Page {...pageProps}>
      <ColorContrastChecker />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Color Contrast Checker – WCAG AA & AAA Compliance | ewory.com",
  title: "Color Contrast Checker",
  description:
    "Check color contrast ratio between text and background for WCAG 2.1 AA and AAA compliance. Preview text readability in real time.",
  instructions:
    "Pick a text color and background color. The tool calculates the contrast ratio and shows whether it meets WCAG accessibility standards.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
