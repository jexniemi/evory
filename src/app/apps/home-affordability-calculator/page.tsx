import Page from "@/components/Page";
import { Metadata } from "next";
import HomeAffordabilityCalculator from "./homeAffordabilityCalculator";
import Info from "./info.mdx";

export default function HomeAffordabilityCalculatorPage() {
  return (
    <Page {...pageProps}>
      <HomeAffordabilityCalculator />
    </Page>
  );
}

const pageProps = {
  seoTitle:
    "Home Affordability Calculator – How Much House Can You Afford? | ewory.com",
  title: "Home Affordability Calculator",
  description:
    "Find out how much house you can afford based on your income, debts, and down payment using the 28/36 rule.",
  instructions:
    "Enter your gross annual income, monthly debt payments (car, student loans, etc.), available down payment, interest rate, and loan term. The calculator uses the 28/36 rule to estimate your maximum home price.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
