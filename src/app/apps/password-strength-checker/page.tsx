import Page from "@/components/Page";
import { Metadata } from "next";
import PasswordStrengthChecker from "./passwordStrengthChecker";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";
import { getAppRoute } from "@/utils";

export default function PasswordStrengthCheckerPage() {
  return (
    <Page {...pageProps}>
      <PasswordStrengthChecker />
    </Page>
  );
}

const pageProps = {
  seoTitle: "Password Strength Checker – Test Your Password Security | ewory.com",
  title: "Password Strength Checker",
  description:
    "Check how strong your password is. See crack time estimates, entropy, and detailed security analysis. All processing happens in your browser.",
  instructions:
    "Type a password to see its strength rating, estimated crack time, and specific recommendations for improvement.",
  Info,
  route: getAppRoute(import.meta.url),
};

export const metadata: Metadata = generateAppMetadata(pageProps);
