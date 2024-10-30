import QRCodeGenerator from "@/components/pages/QRCodeGenerator";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";

export default function QRGenerator() {
  return (
    <Page {...pageProps}>
      <QRCodeGenerator />
    </Page>
  );
}

const pageProps = {
  title: "QR Generator",
  seoTitle: "QR Generator - Create QR Code from Text",
  description:
    "Create a QR code from any text. You can also download the QR code as a .png image file.",
  instructions: `Type the desired content for the QR code into the field, and the application will generate a QR code
  based on the text. You can download the QR code as a .png image file.`,
  Info,
};

export const metadata: Metadata = {
  title: pageProps.seoTitle,
  description: pageProps.description,
};
