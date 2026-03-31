import { apps } from "@/applications";
import { Metadata } from "next";
import Link from "next/link";
import { getCategoryTheme, appIcons } from "@/utils/categoryTheme";

export const metadata: Metadata = {
  title: "Ewory.com - Free calculators and web applications.",
  description:
    "From Ewory.com you will find free calculators and web applications of all kinds.",
};

export default function Home() {
  return (
    <div className="w-full flex-1 pb-20">
      <div className="w-full">
        {Object.keys(apps).map((category, index) => {
          const meta = getCategoryTheme(category);
          const categoryApps = apps[category].apps;
          const featured = categoryApps[0];
          const rest = categoryApps.slice(1);

          return (
            <section key={category} className={index === 0 ? "mt-8" : "mt-14"}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{meta.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                <span className="text-sm text-gray-400 font-medium">
                  {categoryApps.length} applications
                </span>
              </div>

              {/* Featured first card — wider */}
              <Link
                href={`/apps/${featured.route}`}
                className={`group block rounded-xl border border-gray-200 border-l-4 ${meta.accent} ${meta.bg} p-6 mb-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl mt-0.5">
                    {appIcons[featured.route] ?? "🔧"}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-main transition-colors">
                      {featured.displayName}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                      {featured.shortDescription}
                    </p>
                    <span className="inline-flex items-center mt-2 text-xs font-semibold text-main opacity-0 group-hover:opacity-100 transition-opacity">
                      Open application →
                    </span>
                  </div>
                </div>
              </Link>

              {/* Rest of the cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {rest.map((application) => (
                  <Link
                    key={application.route}
                    href={`/apps/${application.route}`}
                    className={`group flex items-start gap-3 rounded-xl border border-gray-200 border-l-4 ${meta.accent} bg-white p-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
                  >
                    <span className="text-xl mt-0.5 flex-shrink-0">
                      {appIcons[application.route] ?? "🔧"}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-main transition-colors">
                        {application.displayName}
                      </h3>
                      <p className="mt-0.5 text-xs text-gray-500 leading-relaxed line-clamp-2">
                        {application.shortDescription}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
