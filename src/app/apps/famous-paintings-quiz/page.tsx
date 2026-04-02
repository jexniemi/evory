import data from "./quiz-data";
import QuizEngine from "@/components/common/QuizEngine";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function FamousPaintingsQuizPage() {
  return (
    <Page {...pageProps}>
      <QuizEngine
        quizOptions={data}
        idKey="id"
        displayNameKey="artist"
        imgPath="/quiz/famous-paintings/"
        imgType=".jpg"
        winScore={10}
      />
    </Page>
  );
}

const pageProps = {
  title: "Famous Paintings Quiz",
  seoTitle: "Famous Paintings Quiz – Name the Artist | ewory.com",
  description:
    "Can you identify the artist behind 13 of the world's most iconic paintings? Test your art history knowledge with this image-based quiz.",
  instructions:
    "Look at the painting and choose the correct artist. Get 10 right to win!",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
