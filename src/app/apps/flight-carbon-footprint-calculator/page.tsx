import App from "@/components/Page";
import { Metadata } from "next";
import FlightCO2Calculator from "./co2Calculator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";


export default function Lentopaastolaskuri() {
  return (
    <App {...pageProps}>
      <FlightCO2Calculator />
    </App>
  );
}

const pageProps = {
  seoTitle:
    "Flight Carbon Footprint Calculator - Calculate Flight CO2 Emissions Easily",
  title: "Flight Carbon Footprint Calculator",
  description:
    "Calculate your flight's carbon footprint easily with the flight carbon footprint calculator. Enter your departure and destination cities, and get an accurate estimate of the flight's carbon dioxide emissions. Understand the environmental impact of flying and make responsible travel choices.",
  instructions:
    "Use the flight carbon footprint calculator to find out the environmental impact of your flight. Enter the details of the departure and destination airports, and the calculator will give you an accurate estimate of the flight's carbon dioxide emissions. This way, you can understand the environmental impact of flying and make more responsible travel choices.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
