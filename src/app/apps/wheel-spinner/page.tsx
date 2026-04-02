import App from "@/components/Page";
import { Metadata } from "next";
import WheelSpinner from "./wheelSpinner";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function WheelSpinnerPage() {
  return (
    <App {...pageProps}>
      <WheelSpinner />
    </App>
  );
}

const pageProps = {
  title: "Wheel Spinner",
  seoTitle: "Wheel Spinner – Random Choice Picker & Decision Wheel | ewory.com",
  description:
    "Free online spinning wheel randomizer. Add your own options and spin to make random decisions, pick winners, choose restaurants, and more.",
  instructions:
    "Add your options to the wheel, then click Spin or press the button. The wheel spins and randomly picks one of your options. You can add up to 20 choices.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
