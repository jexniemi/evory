import App from "@/components/Page";
import { Metadata } from "next";
import BabyNameGenerator from "./babyNameGenerator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function BabyNameGeneratorPage() {
  return (
    <App {...pageProps}>
      <BabyNameGenerator />
    </App>
  );
}

const pageProps = {
  seoTitle:
    "Baby Name Generator – Free Online Name Ideas by Gender | ewory.com",
  title: "Baby Name Generator",
  description:
    "Generate popular American baby names by gender and starting letter. Browse boy and girl name ideas based on SSA data. Free and instant.",
  instructions:
    "Select a gender and an optional starting letter, then click 'Generate Names' to see five suggestions. Click 'Generate More' for new ideas.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
