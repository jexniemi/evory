import data from "./quiz-data";
import QuizEngine from "@/components/common/QuizEngine";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function PlanetsQuizPage() {
  return (
    <Page {...pageProps}>
      <QuizEngine
        quizOptions={data}
        idKey="id"
        displayNameKey="name"
        imgPath="/quiz/planets/"
        imgType=".jpg"
        winScore={10}
      />
    </Page>
  );
}

const pageProps = {
  title: "Planets & Space Quiz",
  seoTitle: "Planets & Space Quiz – Identify Solar System Bodies | ewory.com",
  description:
    "Can you identify the planets, moons, and other solar system bodies from their real NASA/space images? Test your astronomy knowledge!",
  instructions:
    "Look at the space image and choose the correct planet or celestial body. Get 10 right to win!",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
