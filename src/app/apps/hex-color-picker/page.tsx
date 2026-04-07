import Page from "@/components/Page";
import { Metadata } from "next";
import HexColorPicker from "./hexColorPicker";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function HexColorPickerPage() {
  return (
    <Page {...pageProps}>
      <HexColorPicker />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Hex Color Picker – Free Online Color Converter | ewory.com",
  title: "Hex Color Picker",
  description:
    "Pick any color and instantly get its HEX, RGB, and HSL values. Copy color codes with one click. Free online color picker tool.",
  instructions:
    "Use the color picker or enter a HEX code to see the color preview and get RGB and HSL values. Click any value to copy it.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
