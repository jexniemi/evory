import App from "@/components/Page";
import { Metadata } from "next";
import LoveCalculator from "./loveCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function LoveCalculatorPage() {
  return (
    <App {...pageProps}>
      <LoveCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Love Calculator – Free Online Compatibility Test | ewory.com",
  title: "Love Calculator",
  description:
    "Test your love compatibility with our free online love calculator. Enter two names and get a fun compatibility score from 0 to 100 percent instantly.",
  instructions:
    "Enter your name and your partner's name, then click 'Calculate Love Score' to see your compatibility percentage. The same names always produce the same result.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
