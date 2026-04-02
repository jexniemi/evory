import { Metadata } from "next";

const BASE_URL = "https://www.ewory.com";

interface AppMetaInput {
  seoTitle?: string;
  title: string;
  description: string;
  route: string;
}

export function generateAppMetadata({
  seoTitle,
  title,
  description,
  route,
}: AppMetaInput): Metadata {
  const pageTitle = seoTitle || title;
  const url = `${BASE_URL}/apps/${route}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: "Ewory.com",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}
