import Page from "@/components/Page";
import { Metadata } from "next";
import RegexTester from "./regexTester";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function RegexTesterPage() {
  return (
    <Page {...pageProps}>
      <RegexTester />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Regex Tester – Free Online Regular Expression Tester | ewory.com",
  title: "Regex Tester",
  description:
    "Test and debug regular expressions in real time. See highlighted matches, captured groups, and match positions instantly.",
  instructions:
    "Enter a regex pattern and test string. Matches are highlighted in real time. Toggle flags to change matching behavior.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
