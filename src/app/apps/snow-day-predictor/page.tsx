import Page from "@/components/Page";
import { Metadata } from "next";
import SnowDayPredictor from "./snowDayPredictor";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function SnowDayPredictorPage() {
  return (
    <Page {...pageProps}>
      <SnowDayPredictor />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Snow Day Predictor – Will School Be Cancelled? | ewory.com",
  title: "Snow Day Predictor",
  description:
    "Predict the chance of a snow day based on snowfall, temperature, wind speed, and your region. Fun tool for students and parents.",
  instructions:
    "Enter the expected weather conditions and your school info. The predictor estimates the likelihood of a snow day cancellation.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
