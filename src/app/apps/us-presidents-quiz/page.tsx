import Page from "@/components/Page";
import QuizEngine from "@/components/common/QuizEngine";
import quizData from "./quiz-data";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function USPresidentsQuizPage() {
  return (
    <Page {...pageProps}>
      <QuizEngine
        quizOptions={quizData}
        idKey="id"
        displayNameKey="name"
        textAnswerKey="clue"
        winScore={10}
        loseScore={3}
      />
    </Page>
  );
}

const pageProps = {
  route: "us-presidents-quiz",
  title: "U.S. Presidents Quiz",
  seoTitle: "U.S. Presidents Quiz – Test Your American History Knowledge",
  description:
    "Play an engaging U.S. Presidents quiz with historical clues. Choose the correct president from four options and build your streak.",
  instructions:
    "Read the clue and choose the correct U.S. President. Keep your streak for higher points and level progression.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
