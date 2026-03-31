import App from "@/components/Page";
import { Metadata } from "next";
import CoinFlip from "./coinFlip";
import Info from "./info.mdx";

export default function CoinFlipPage() {
  return (
    <App {...pageProps}>
      <CoinFlip />
    </App>
  );
}

const pageProps = {
  seoTitle: "Coin Flip – Free Online Coin Toss Simulator | ewory.com",
  title: "Coin Flip",
  description:
    "Flip a virtual coin online instantly. Track heads vs tails statistics and history. Free, fair, and random coin toss simulator.",
  instructions:
    "Click the 'Flip Coin' button to toss a virtual coin. The result is completely random. View your flip history and running statistics below.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
