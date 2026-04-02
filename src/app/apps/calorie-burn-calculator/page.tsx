import Page from "@/components/Page";
import { Metadata } from "next";
import Kalorienpolttolaskuri from "./kalorienpolttolaskuri";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function KalorienpolttolaskuriPage() {
  return (
    <Page {...pageProps}>
      <Kalorienpolttolaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Calorie Burn Calculator",
  seoTitle: "Calorie Burn Calculator – Calculate exercise calorie expenditure",
  description:
    "Free calorie burn calculator: calculate how many calories you burn in different activities using MET values. Enter weight, select sport and duration.",
  instructions:
    "Enter your weight, select the activity and exercise duration in minutes.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
