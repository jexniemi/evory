import Page from "@/components/Page";
import QuizEngine from "@/components/common/QuizEngine";
import quizData from "./quiz-data";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function USStateCapitalsQuizPage() {
  return (
    <Page {...pageProps}>
      <QuizEngine
        quizOptions={quizData}
        idKey="code"
        displayNameKey="capital"
        textAnswerKey="state"
        winScore={12}
        loseScore={3}
      />
    </Page>
  );
}

const pageProps = {
  title: "U.S. State Capitals Quiz",
  seoTitle: "U.S. State Capitals Quiz – Learn and Test All 50 State Capitals",
  description:
    "Challenge yourself with the U.S. State Capitals Quiz. See a U.S. state and pick the correct capital city from four choices.",
  instructions:
    "Read the state name and choose the correct capital city. Build streaks, level up, and try to finish with all lives left.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
