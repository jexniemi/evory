import { Metadata } from "next"
import App from "@/components/Page"
import { generateAppMetadata } from "@/utils/seo"
import { getAppRoute } from "@/utils"
import ZodiacSignCalculator from "./zodiacSignCalculator"
import Info from "./info.mdx"

const pageProps = {
  title: "Zodiac Sign Calculator",
  seoTitle: "Zodiac Sign Calculator – Find Your Astrological Sign",
  description: "Enter your birth date and instantly discover your Western zodiac sign, ruling planet, element, and personality traits.",
  instructions: "Select your birth month and enter your birth day. Your zodiac sign, element, ruling planet, and key traits are shown instantly.",
  Info,
  route: getAppRoute(import.meta.url),
}

export const metadata: Metadata = generateAppMetadata(pageProps)

export default function Page() {
  return (
    <App {...pageProps}>
      <ZodiacSignCalculator />
    </App>
  )
}
