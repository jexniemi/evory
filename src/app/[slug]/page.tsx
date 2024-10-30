import { Metadata } from "next";
import { apps } from "../../applications";
import AppCards from "@/components/AppCards/AppCards";

export const metadata: Metadata = {
  title: "Ewory.com - Free calculators and web apps.",
  description:
    "Ewory.com offers free calculators and online applications for everyone..",
};

export default function Page({ params }: { params: { slug: string } }) {
  const applications = Object.values(apps).find((category) =>
    category.path?.includes(params.slug)
  );
  return (
    <div className="flex flex-row flex-wrap mb-20">
      {applications ? <AppCards apps={applications.apps} /> : null}
    </div>
  );
}
