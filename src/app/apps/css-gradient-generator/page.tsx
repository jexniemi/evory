import { Metadata } from "next";
import Page from "@/components/Page";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";
import CssGradientGenerator from "./cssGradientGenerator";
import Info from "./info.mdx";

const route = getAppRoute(import.meta.url);

export const metadata: Metadata = generateAppMetadata({
  seoTitle: "CSS Gradient Generator – Free Online Tool | ewory.com",
  title: "CSS Gradient Generator",
  description: "Create beautiful CSS gradients with a visual editor. Supports linear, radial, and conic gradients with unlimited color stops.",
  route,
});

export default function CssGradientGeneratorPage() {
  return (
    <Page
      title="CSS Gradient Generator"
      description="Create beautiful CSS gradients visually. Choose colors, adjust angles, and copy the CSS code."
      instructions=""
      Info={Info}
    >
      <CssGradientGenerator />
    </Page>
  );
}
