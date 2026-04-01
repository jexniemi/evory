import App from "@/components/Page";
import { Metadata } from "next";
import DiceGenerator from "./diceGenerator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function DiceGeneratorPage() {
  return (
    <App {...pageProps}>
      <DiceGenerator />
    </App>
  );
}

const pageProps = {
  route: "dice-generator",
  seoTitle: "Dice Generator - Roll Virtual Dice",
  title: "Dice Generator",
  description:
    "Roll virtual dice online. Choose the number and type of dice. Suitable for board games, role-playing games, and other dice rolling.",
  instructions:
    "Choose the number of dice and the number of sides, and press the 'Roll Dice!' button. The generator shows the results with animation.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
