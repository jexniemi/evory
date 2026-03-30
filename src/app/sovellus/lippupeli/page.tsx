import countries from "@/data/countries/data/fi";
import Page from "@/components/Page";
import QuizEngine from "@/components/common/QuizEngine";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function FlagQuiz() {
  return (
    <Page {...pageProps}>
      <QuizEngine
        quizOptions={countries}
        idKey="alpha2"
        loseScore={10}
        winScore={20}
      />
    </Page>
  );
}

const pageProps = {
  title: "Lippupeli",
  seoTitle: "Lippupeli – Tunnista maailman maiden liput",
  description:
    "Kuinka hyvin tunnet maailman liput? Lippupelissä näet lipun ja valitset oikean maan neljästä vaihtoehdosta. Pelissä on mukana kaikki maailman maat.",
  instructions:
    "Tunnista maa lipun perusteella. Sinulla on 10 elämää — arvaa 20 oikein niin voitat. Kuinka pitkän putken saat?",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
