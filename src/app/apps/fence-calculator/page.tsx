import App from "@/components/Page";
import { Metadata } from "next";
import FenceCalculator from "./fenceCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function FenceCalculatorPage() {
  return (
    <App {...pageProps}>
      <FenceCalculator />
    </App>
  );
}

const pageProps = {
  title: "Fence Calculator",
  seoTitle: "Fence Calculator – How Many Posts and Panels Do I Need? | ewory.com",
  description:
    "Calculate how many fence posts, panels, and bags of concrete you need for your fencing project. Free online fence material estimator.",
  instructions:
    "Enter the total fence length, post spacing, and panel width. The calculator shows posts, panels, and concrete bags needed.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
