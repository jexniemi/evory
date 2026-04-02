import data from "./quiz-data";
import QuizEngine from "@/components/common/QuizEngine";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function CarLogosQuizPage() {
  return (
    <Page {...pageProps}>
      <QuizEngine
        quizOptions={data}
        idKey="id"
        displayNameKey="name"
        imgPath="/quiz/car-logos/"
        imgType=".svg"
        winScore={12}
      />
    </Page>
  );
}

const pageProps = {
  title: "Car Logos Quiz",
  seoTitle: "Car Logos Quiz – Identify Car Brand Logos | ewory.com",
  description:
    "Test your knowledge of car brand logos! Identify 16 famous car manufacturers from their iconic logos in this fun automotive quiz.",
  instructions:
    "Look at the car logo and choose the correct brand name. Get 12 right before 3 wrong to win!",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
