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
  seoTitle: "Sotilasarvot-tietovisa – Tunnista Suomen maavoimien arvomerkit",
  description:
    "Tunnetko Suomen maavoimien sotilasarvot? Tietovisassa näet arvomerkin kuvan ja valitset oikean sotilasarvon neljästä vaihtoehdosta. Mukana kaikki 21 arvoa sotamiehestä kenraaliin.",
  instructions:
    "Tunnista sotilasarvo arvomerkin perusteella. Sinulla on 3 elämää — arvaa 10 oikein niin voitat!",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
