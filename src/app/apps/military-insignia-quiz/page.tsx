import data from "./quiz-data";
import QuizEngine from "@/components/common/QuizEngine";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function ArmyQuiz() {
  return (
    <Page {...pageProps}>
      <QuizEngine
        quizOptions={data}
        idKey="slug"
        displayNameKey="name"
        imgPath="/quiz/us-army-ranks/"
        imgType=".svg"
      />
    </Page>
  );
}

const pageProps = {
  route: "military-insignia-quiz",
  title: "U.S. Army Rank Insignia Quiz",
  seoTitle: "U.S. Army Rank Insignia Quiz – Identify Real Army Rank Badges",
  description:
    "Test your knowledge of U.S. Army rank insignia. Identify real official rank badges across enlisted, warrant officer, and officer ranks.",
  instructions:
    "Identify the U.S. Army rank based on the insignia. You have 3 lives — guess 10 correctly to win!",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
