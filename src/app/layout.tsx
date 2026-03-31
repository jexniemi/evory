import "./globals.css";
import Header from "@/components/Header";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";
import MiddleColumn from "@/components/common/MiddleColumn";
import AppSuggestionBar from "@/components/AppSuggestionsBar";
import { GoogleAnalytics } from "@next/third-parties/google";

/* import { motion } from "framer-motion"; */

const gaTrackingId = "G-ZHP8R21E7S";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light">
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
