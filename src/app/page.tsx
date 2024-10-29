import { apps } from "@/applications";
import AppCards from "@/components/AppCards/AppCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appit.fi - Ilmaiset laskurit ja selainsovellukset.",
  description:
    "Appit.fi:stä löydät ilmaisia laskureita ja selainsovelluksia laidasta laitaan.",
};

export default function Home() {
  return (
    <div className="w-full flex-1 pb-20">
      <div className="w-full">
        {Object.keys(apps).map((category, index) => (
          <div key={category}>
            <div>
              <h2
                className={`text-2xl ${
                  index === 0 ? "mt-8" : ""
                } font-bold text-black text-left dark:text-white`}
              >
                {category}
              </h2>
            </div>
            <AppCards apps={apps[category].apps} />
            <div className="flex w-full flex-col">
              <div className="divider h-12"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
