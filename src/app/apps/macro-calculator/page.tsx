import Page from "@/components/Page";
import { Metadata } from "next";
import Makrolaskuri from "./makrolaskuri";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function MakrolaskuriPage() {
  return (
    <Page {...pageProps}>
      <Makrolaskuri />
    </Page>
  );
}

const pageProps = {
  route: "macro-calculator",
  title: "Macro Calculator",
  seoTitle: "Macro Calculator – Calculate daily calories and macros",
  description:
    "Free macro calculator: calculate your daily calorie needs and appropriate protein, carbohydrate and fat needs according to your goal. Suitable for dieters, muscle builders and weight maintainers.",
  instructions:
    "Enter your weight, select your goal and activity level. You get a calculation of daily calories and macronutrients.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
