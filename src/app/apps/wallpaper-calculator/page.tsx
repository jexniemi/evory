import App from "@/components/Page";
import { Metadata } from "next";
import WallpaperCalculator from "./wallpaperCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function WallpaperCalculatorPage() {
  return (
    <App {...pageProps}>
      <WallpaperCalculator />
    </App>
  );
}

const pageProps = {
  title: "Wallpaper Calculator",
  seoTitle: "Wallpaper Calculator – How Many Rolls Do I Need? | ewory.com",
  description:
    "Calculate how many rolls of wallpaper you need for any room. Enter room dimensions, ceiling height, doors, and windows for an accurate estimate.",
  instructions:
    "Enter your room length, width, ceiling height, and the number of doors and windows. The calculator shows net wall area and rolls needed with 10% waste.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
