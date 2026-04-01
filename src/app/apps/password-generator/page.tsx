import App from "@/components/Page";
import { Metadata } from "next";
import PasswordGenerator from "./passwordGenerator";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function PasswordGeneratorPage() {
  return (
    <App {...pageProps}>
      <PasswordGenerator />
    </App>
  );
}

const pageProps = {
  route: "password-generator",
  seoTitle: "Password Generator – Free Online Secure Password Tool | ewory.com",
  title: "Password Generator",
  description:
    "Generate strong, random passwords instantly. Customize length, characters, and symbols. Free online secure password generator for maximum protection.",
  instructions:
    "Adjust the password length with the slider, select the character types you want, and click 'Generate Password'. Click 'Copy' to copy it to your clipboard.",
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
