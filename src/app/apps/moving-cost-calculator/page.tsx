import Page from "@/components/Page";
import { Metadata } from "next";
import MovingCostCalculator from "./movingCostCalculator";
import Info from "./info.mdx";

export default function MovingCostCalculatorPage() {
  return (
    <Page {...pageProps}>
      <MovingCostCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Moving Cost Calculator – Free Online Moving Estimator | ewory.com",
  title: "Moving Cost Calculator",
  description:
    "Estimate your moving costs based on distance, home size, and packing services. Get a quick breakdown of professional moving expenses.",
  instructions:
    "Enter the moving distance in miles, the number of rooms in your home, and select your packing service level. The calculator estimates base moving costs, distance charges, and gives you a grand total.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
