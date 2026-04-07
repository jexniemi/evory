import Page from "@/components/Page";
import { Metadata } from "next";
import TypingSpeedTest from "./typingSpeedTest";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function TypingSpeedTestPage() {
  return (
    <Page {...pageProps}>
      <TypingSpeedTest />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Typing Speed Test – Free Online WPM Test | ewory.com",
  title: "Typing Speed Test",
  description:
    "Test your typing speed and accuracy with this free online WPM test. See your words per minute, accuracy percentage, and time in real-time.",
  instructions:
    "Click Start, then type the displayed text as quickly and accurately as you can. Your WPM and accuracy are calculated in real-time.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
