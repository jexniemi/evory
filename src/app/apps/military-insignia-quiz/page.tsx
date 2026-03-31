import data from "@/data/sotilasmerkit";
import QuizEngine from "@/components/common/QuizEngine";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function ArmyQuiz() {
  return (
    <Page {...pageProps}>
      <QuizEngine quizOptions={data} idKey="name" imgPath="/sotilasmerkit/" />
    </Page>
  );
}

const pageProps = {
  title: "Army Military Ranks Quiz",
  seoTitle: "Military Ranks Quiz – Identify Finnish Army insignia",
  description:
    "Do you know the Finnish Army military ranks? In the quiz, you see an insignia image and choose the correct military rank from four options. Includes all 21 ranks from private to general.",
  instructions:
    "Identify the military rank based on the insignia. You have 3 lives — guess 10 correctly to win!",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
