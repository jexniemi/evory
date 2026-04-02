import { Metadata } from "next";
import App from "@/components/Page";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";
import RandomColorGenerator from "./randomColorGenerator";
import Info from "./info.mdx";

const pageProps = {
  title: "Random Color Generator",
  seoTitle: "Random Color Generator – HEX, RGB & HSL Colors",
  description:
    "Generate random colors instantly in HEX, RGB, and HSL formats. Copy values with one click and create full random color palettes.",
  instructions:
    "Click the large color block to generate a new random color. Use the format buttons to switch between HEX, RGB, and HSL. Click any copy button to copy the value to your clipboard. Hit 'New palette' to regenerate the 5-color palette.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);

export default function Page() {
  return (
    <App {...pageProps}>
      <RandomColorGenerator />
    </App>
  );
}
