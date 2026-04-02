import Page from "@/components/Page";
import { Metadata } from "next";
import GradeCalculator from "./gradeCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function GradeCalculatorPage() {
  return (
    <Page {...pageProps}>
      <GradeCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Grade Calculator – What Do I Need on My Final Exam? | ewory.com",
  title: "Grade Calculator",
  description:
    "Calculate what score you need on your final exam to reach your desired grade. Enter current grade, final weight, and target to see your required score.",
  instructions:
    "Enter your current course grade (%), the weight of the final exam (%), and your desired overall grade (%). The calculator shows the score you need on the final.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
