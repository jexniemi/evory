import App from "@/components/Page";
import { Metadata } from "next";
import LoanCalculator from "./loanCalculator";
import Info from "./info.mdx";

export default function LoanPage() {
  return (
    <App {...pageProps}>
      <LoanCalculator />
    </App>
  );
}

const pageProps = {
  seoTitle: "Lainan lyhennyslaskuri – Laske kuukausierä ja korot",
  title: "Lainan lyhennyslaskuri",
  description:
    "Laske lainan kuukausierä, kokonaiskustannukset ja korkomenot. Syötä lainasumma, korko ja laina-aika – näet tarkan kuukausierän ja kuinka paljon maksat korkoja.",
  instructions:
    "Syötä lainasumma, vuotuinen korko ja laina-aika vuosissa. Laskuri näyttää kuukausierän, korkokulut, kokonaismaksun ja takaisinmaksukertoimen.",
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
