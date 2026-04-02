import App from "@/components/Page";
import { Metadata } from "next";
import OneRepMaxCalculator from "./oneRepMaxCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function OneRepMaxCalculatorPage() {
  return (
    <App {...pageProps}>
      <OneRepMaxCalculator />
    </App>
  );
}

const pageProps = {
  title: "One Rep Max Calculator",
  seoTitle: "One Rep Max Calculator – Free 1RM Estimator | ewory.com",
  description:
    "Calculate your one-rep max (1RM) using the Epley and Brzycki formulas. Find your strength training zones for any lift in seconds.",
  instructions:
    "Enter the weight you lifted and how many reps you completed. The calculator estimates your 1RM and suggests weights for strength, hypertrophy, and endurance training.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
