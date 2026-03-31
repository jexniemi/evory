import Page from "@/components/Page";
import { Metadata } from "next";
import Sydansykelaskuri from "./sydansykelaskuri";
import Info from "./info.mdx";

export default function SydansykelaskuriPage() {
  return (
    <Page {...pageProps}>
      <Sydansykelaskuri />
    </Page>
  );
}

const pageProps = {
  title: "Heart Rate Calculator",
  seoTitle:
    "Heart Rate Calculator – Calculate heart rate zones based on age and resting heart rate",
  description:
    "Free heart rate calculator: calculate 5 heart rate zones based on your age and resting heart rate using Karvonen formula. Optimize your training to the right intensity zones.",
  instructions:
    "Enter your age and resting heart rate. You can also enter your measured maximum heart rate for more accurate results.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
