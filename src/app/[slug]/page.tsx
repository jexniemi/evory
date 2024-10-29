import { Metadata } from "next";
import { apps } from "../../applications";
import AppCards from "@/components/AppCards/AppCards";

export const metadata: Metadata = {
  title: "Appit.fi - Ilmaiset selainsovellukset.",
  description: "Appit.fi:stä löydät ilmaisia selainsovelluksia.",
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
