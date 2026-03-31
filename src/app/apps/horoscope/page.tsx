import Page from "@/components/Page";
import { Metadata } from "next";
import Horoskooppi from "./horoskooppi";
import Info from "./info.mdx";

export default function HoroskooppiPage() {
  return (
    <Page {...pageProps}>
      <Horoskooppi />
    </Page>
  );
}

const pageProps = {
  title: "Horoscope",
  seoTitle: "Horoscope – All horoscope signs and daily number",
  description:
    "Check your horoscope sign description, compatible signs, element and daily lucky number. All 12 horoscope signs in one place.",
  instructions: "Select your horoscope sign by clicking the symbol.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
