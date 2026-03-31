import Page from "@/components/Page";
import { Metadata } from "next";
import Prosenttilaskuri from "./prosenttilaskuri";
import Info from "./info.mdx";

export default function ProsenttilaskuriPage() {
  return (
    <Page {...pageProps}>
      <Prosenttilaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Percentage Calculator",
  seoTitle:
    "Percentage Calculator – Calculate percentage, share and change easily",
  description:
    "Free percentage calculator with three functions: calculate how much is X% of Y, what percentage X is of Y, and how much the value changed in percentage.",
  instructions:
    "Select the operation below: calculate percentage value, share percentage or change percentage. Enter numbers and the result updates immediately.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
