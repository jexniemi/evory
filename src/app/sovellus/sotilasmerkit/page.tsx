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
  title: "Maavoimien sotilasarvot -tietovisa",
  seoTitle: "Maavoimien sotilasarvot -tietovisa",
  description:
    "Tiedätkö kaikki maavoimien sotilasmerkit? Testaa taitosi pelaamalla Maavoimien arvomerkit -tietovisaa.",
  instructions: `Opettele kaikki maavoimien sotilasmerkit! Sinun pitää arvata sotilasmerkki kuvan perusteella. Arvaa 10 merkkiä oikein niin voitat.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
