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
  seoTitle: "Lippupeli - Testaa tietosi maailman maiden lipuista",
  description:
    "Tiedätkö kaikkien maiden liput? Testaa taitosi pelaamalla lippupeliä. Pelissä on mukana kaikkien maailman maiden liput.",
  instructions: `Opettele kaikkien maiden liput! Lippupelissä sinut pitää arvata maa lipun perusteella. Voitat, jos arvaat 20 maata oikein`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
