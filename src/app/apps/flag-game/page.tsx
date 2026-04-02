import countries from "./quiz-data";
import Page from "@/components/Page";
import QuizEngine from "@/components/common/QuizEngine";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function FlagQuiz() {
  return (
    <Page {...pageProps}>
      <QuizEngine
        quizOptions={countries}
        idKey="alpha2"
        loseScore={10}
        winScore={20}
        imgPath="/quiz/flags/128x128/"
      />
    </Page>
  );
}

const pageProps = {
  route: "flag-game",
  title: "Flag Game",
  seoTitle: "Flag Game – Identify the Flags of the World's Countries",
  description:
    "How well do you know the world's flags? In the flag game, you see a flag and choose the correct country from four options. The game includes all countries in the world.",
  instructions:
    "Identify the country based on the flag. You have 10 lives — guess 20 correctly to win. How long a streak can you get?",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
