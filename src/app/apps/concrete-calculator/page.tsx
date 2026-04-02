import App from "@/components/Page";
import { Metadata } from "next";
import ConcreteCalculator from "./concreteCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function ConcreteCalculatorPage() {
  return (
    <App {...pageProps}>
      <ConcreteCalculator />
    </App>
  );
}

const pageProps = {
  title: "Concrete Calculator",
  seoTitle: "Concrete Calculator – How Many Bags of Concrete Do I Need? | ewory.com",
  description:
    "Calculate how many 60-lb or 80-lb bags of concrete you need for any slab, footing, or project. Instant results in cubic feet and cubic yards.",
  instructions:
    "Enter the length, width, and thickness of your concrete project. The calculator shows volume in cubic feet and cubic yards, plus the number of bags needed.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
