import "./globals.css";
import Header from "@/components/Header";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";
import MiddleColumn from "@/components/common/MiddleColumn";
import AppSuggestionBar from "@/components/AppSuggestionsBar";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";

const gaTrackingId = "G-ZHP8R21E7S";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ewory.com"),
  title: {
    default: "Ewory.com — Free Online Calculators & Web Tools",
    template: "%s | Ewory.com",
  },
  verification: {
    google: "enZGqP460TxbNrFNACp4ZDxAWmWs-JfxCHjecGQuILM",
  },
  description:
    "60+ free online calculators for finance, health, math, and everyday life. No login, no ads — all tools work instantly in your browser.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ewory.com",
    title: "Ewory.com — Free Online Calculators & Web Tools",
    description:
      "60+ free online calculators for finance, health, math, and everyday life. No login, no ads.",
    url: "https://www.ewory.com",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Ewory.com — Free Online Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ewory.com — Free Online Calculators & Web Tools",
    description:
      "60+ free online calculators for finance, health, math, and everyday life.",
    images: ["/banner.png"],
  },
  alternates: {
    canonical: "https://www.ewory.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <GoogleAnalytics gaId={gaTrackingId} />
      <body>
        <Header />
        <MiddleColumn location="front">{children}</MiddleColumn>
        <AppSuggestionBar />
        <ShareButtons />
        <Footer />
      </body>
    </html>
  );
}
