import "./globals.css";
import Header from "@/components/Header";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";
import Head from "next/head";
import MiddleColumn from "@/components/common/MiddleColumn";
import AppSuggestionBar from "@/components/AppSuggestionsBar";
import { GoogleAnalytics } from "@next/third-parties/google";
import { League_Spartan } from "next/font/google";

/* import { motion } from "framer-motion"; */
const league_spartan = League_Spartan({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const gaTrackingId = "G-9PPYT95BLE";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <GoogleAnalytics gaId={gaTrackingId} />
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4542692298814139"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className={league_spartan.className}>
        <Header />
        <MiddleColumn location="front">{children}</MiddleColumn>
        <AppSuggestionBar />
        <ShareButtons />
        <Footer />
      </body>
    </html>
  );
}
