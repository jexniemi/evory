import "./globals.css";
import Header from "@/components/Header";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";
import MiddleColumn from "@/components/common/MiddleColumn";
import AppSuggestionBar from "@/components/AppSuggestionsBar";

export default function BasicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <MiddleColumn location="front">{children}</MiddleColumn>
      <AppSuggestionBar />
      <ShareButtons />
      <Footer />
    </>
  );
}
