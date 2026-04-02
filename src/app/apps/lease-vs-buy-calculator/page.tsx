import App from "@/components/Page";
import { Metadata } from "next";
import LeaseVsBuyCalculator from "./leaseVsBuyCalculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function LeaseVsBuyCalculatorPage() {
  return (
    <App {...pageProps}>
      <LeaseVsBuyCalculator />
    </App>
  );
}

const pageProps = {
  title: "Lease vs Buy Calculator",
  seoTitle: "Lease vs Buy Car Calculator – Compare Total Cost | ewory.com",
  description:
    "Compare the total cost of leasing vs buying a car. See which option saves more money over the lease or loan term.",
  instructions:
    "Enter lease payment, lease term, loan payment, car price, and estimated resale value. The calculator shows total costs and which option is cheaper.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
