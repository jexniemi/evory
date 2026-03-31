import { apps } from "@/applications";
import { Metadata } from "next";
import Link from "next/link";
import { getCategoryTheme, appIcons } from "@/utils/categoryTheme";

export const metadata: Metadata = {
  title: "Ewory.com — 90+ Free Online Calculators for Finance, Health & More",
  description:
    "Free online calculators and tools: mortgage, salary, BMI, tip, compound interest, tax, unit converters and more. No login, no ads — works instantly in your browser.",
  alternates: {
    canonical: "https://ewory.com",
  },
};

const popularTools = [
  { route: "mortgage-calculator", label: "Mortgage Calculator", emoji: "🏠" },
  { route: "bmi-calculator", label: "BMI Calculator", emoji: "⚖️" },
  { route: "paycheck-calculator", label: "Paycheck Calculator", emoji: "🏧" },
  { route: "compound-interest-calculator", label: "Compound Interest", emoji: "📈" },
  { route: "tip-calculator", label: "Tip Calculator", emoji: "🍽️" },
  { route: "age-calculator", label: "Age Calculator", emoji: "🎂" },
  { route: "password-generator", label: "Password Generator", emoji: "🔐" },
  { route: "countdown-timer", label: "Countdown Timer", emoji: "⏳" },
];

export default function Home() {
  const totalApps = Object.values(apps).reduce(
    (sum, cat) => sum + cat.apps.length,
    0,
  );

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ewory.com",
    url: "https://ewory.com",
    description:
      "Free online calculators and tools for finance, health, and everyday life.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://ewory.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="w-full flex-1 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Hero */}
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Free Online Calculators
          <br className="hidden sm:block" /> & Tools
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          Instant tools for finance, health, everyday math, and more.
          <br className="hidden sm:block" /> No login. No ads. Always free.
        </p>
        <div className="mt-6 flex justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
            🧮 {totalApps}+ free tools
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
            ✓ Always free
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            ⚡ Works instantly
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700">
            🔒 No login required
          </span>
        </div>
      </section>

      {/* Popular Tools */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          ⭐ Popular Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {popularTools.map((tool) => (
            <Link
              key={tool.route}
              href={`/apps/${tool.route}`}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:text-main"
            >
              <span className="text-xl flex-shrink-0">{tool.emoji}</span>
              <span className="leading-tight">{tool.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* All Categories */}
      <div className="w-full">
        {Object.keys(apps).map((category, index) => {
          const meta = getCategoryTheme(category);
          const categoryApps = apps[category].apps;
          const featured = categoryApps[0];
          const rest = categoryApps.slice(1);

          return (
            <section key={category} className={index === 0 ? "" : "mt-14"}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{meta.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                <span className="text-sm text-gray-400 font-medium">
                  {categoryApps.length} tools
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
                      Open tool →
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
