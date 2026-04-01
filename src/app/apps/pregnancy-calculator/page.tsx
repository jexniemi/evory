import Page from "@/components/Page";
import { Metadata } from "next";
import Raskauslaskuri from "./raskauslaskuri";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function RaskauslaskuriPage() {
  return (
    <Page {...pageProps}>
      <Raskauslaskuri />
    </Page>
  );
}

const pageProps = {
  route: "pregnancy-calculator",
  title: "Pregnancy Calculator",
  seoTitle: "Pregnancy Calculator – Calculate Due Date and Pregnancy Weeks",
  description:
    "Free pregnancy calculator: calculate due date, current pregnancy week, trimester, and important milestones to the estimated delivery date. Enter the first day of your last menstrual period.",
  instructions:
    "Enter the first day of your last menstrual period or the due date, and you'll see the pregnancy week, trimester, and important dates.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
