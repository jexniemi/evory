import { apps } from "@/applications";
import AppCards from "@/components/AppCards/AppCards";
import { Metadata } from "next";
import BasicLayout from "./BasicLayout";

export const metadata: Metadata = {
  title: "Ewory.com - Free calculators and web apps.",
  description:
    "Ewory.com offers free calculators and online applications for everyone..",
};

export default function Home() {
  return (
    <BasicLayout>
      <div className="w-full flex-1 pb-20">
        <div className="w-full">
          {apps.map((category, index) => (
            <div key={category.name}>
              <div>
                <h2
                  className={`text-2xl ${
                    index === 0 ? "mt-8" : ""
                  } font-bold text-black text-left dark:text-white`}
                >
                  {category.name}
                </h2>
              </div>
              <AppCards apps={category.apps} />
              <div className="flex w-full flex-col">
                <div className="divider h-12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BasicLayout>
  );
}
