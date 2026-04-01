import App from "@/components/Page";
import { Metadata } from "next";
import RockPaperScissors from "./rockPaperScissors";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function RockPaperScissorsPage() {
  return (
    <App {...pageProps}>
      <RockPaperScissors />
    </App>
  );
}

const pageProps = {
  route: "rock-paper-scissors",
  seoTitle: "Rock Paper Scissors – Free Online Game vs Computer | ewory.com",
  title: "Rock Paper Scissors",
  description:
    "Play Rock Paper Scissors against the computer online. Track your wins, losses, and draws. Free, instant, and fun RPS game simulator.",
  instructions:
    "Click Rock, Paper, or Scissors to play against the computer. The computer picks randomly. Your score is tracked automatically. Click 'Reset Score' to start over.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
