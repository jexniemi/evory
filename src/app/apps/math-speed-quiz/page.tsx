import { Metadata } from "next";
import App from "@/components/Page";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";
import MathSpeedQuiz from "./mathSpeedQuiz";
import Info from "./info.mdx";

const pageProps = {
  title: "Math Speed Quiz",
  seoTitle: "Math Speed Quiz – Timed Mental Arithmetic Practice",
  description:
    "Race against the clock with this timed math quiz. Choose difficulty and operations, then solve 10 arithmetic questions in 10 seconds each.",
  instructions:
    "Select your difficulty (Easy / Medium / Hard) and which operations to include (+, -, ×, ÷). Hit Start and answer each question before the 10-second timer runs out. Your score is shown at the end.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);

export default function Page() {
  return (
    <App {...pageProps}>
      <MathSpeedQuiz />
    </App>
  );
}
