import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

export default function SEO({ title, description }: Props) {
  return (
    <Head>
      <title>{title + " "}| Appit.fi</title>
      <meta name="description" content={description} />
    </Head>
  );
}
