import Page from "@/components/Page";
import QuizEngine from "@/components/common/QuizEngine";
import quizData from "./quiz-data";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function WorldCapitalsQuizPage() {
  return (
    <Page {...pageProps}>
      <QuizEngine
        quizOptions={quizData}
        idKey="countryCode"
        displayNameKey="country"
        textAnswerKey="capital"
        winScore={12}
        loseScore={3}
      />
    </Page>
  );
}

const pageProps = {
  route: getAppRoute(import.meta.url),
  title: "World Capitals Quiz",
  seoTitle: "World Capitals Quiz – Guess Countries by Their Capital Cities",
  description:
    "Challenge your geography knowledge by matching world capitals to the correct countries in this fast quiz game.",
  instructions:
    "Read the capital city and choose the correct country from four options. Build streaks and hit the target score before lives run out.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
