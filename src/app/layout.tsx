import "./globals.css";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Anek_Devanagari } from "next/font/google";

const font = Anek_Devanagari({
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
      <body className={font.className}>{children}</body>
    </html>
  );
}
