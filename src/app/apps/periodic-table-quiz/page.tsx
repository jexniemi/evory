import { Metadata } from "next"
import App from "@/components/Page"
import { generateAppMetadata } from "@/utils/seo"
import { getAppRoute } from "@/utils"
import PeriodicTableQuiz from "./periodicTableQuiz"
import Info from "./info.mdx"

const pageProps = {
  title: "Periodic Table Quiz",
  seoTitle: "Periodic Table Quiz – Test Your Chemistry Knowledge",
  description: "Test your knowledge of the periodic table with this interactive quiz. Guess element symbols, names, or atomic numbers across 10 random questions.",
  instructions: "Choose a quiz mode: guess the symbol, guess the name, or guess the atomic number. Answer the 10 multiple-choice questions to get your score. Click 'Play Again' to retry with a new random set.",
  Info,
  route: getAppRoute(import.meta.url),
}

export const metadata: Metadata = generateAppMetadata(pageProps)

export default function Page() {
  return (
    <App {...pageProps}>
      <PeriodicTableQuiz />
    </App>
  )
}
