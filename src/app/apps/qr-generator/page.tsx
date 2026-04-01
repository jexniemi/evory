import QRCodeGenerator from "@/components/pages/QRCodeGenerator";
import Page from "@/components/Page";
import { Metadata } from "next";
import Info from "./info.mdx";
import { generateAppMetadata } from "@/utils/seo";

export default function QRGenerator() {
  return (
    <Page {...pageProps}>
      <QRCodeGenerator />
    </Page>
  );
}

const pageProps = {
  route: "qr-generator",
  title: "QR Generator",
  seoTitle: "QR Generator - Create QR Code from Text",
  description:
    "Create a QR code from any text. You can also download the QR code as a .png image file.",
  instructions: `Write the desired QR code content in the field and the app will create a QR code
  based on the text. You can download the QR code as a .png image file.`,
  Info,
};

export const metadata: Metadata = generateAppMetadata(pageProps);
