import { Metadata } from "next";
import { apps } from "../../applications";
import { getThemeBySlug, appIcons } from "@/utils/categoryTheme";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = getThemeBySlug(slug);
  const category = Object.values(apps).find((c) => c.path?.includes(slug));

  if (!result || !category) {
    return { title: "Category Not Found" };
  }

  const title = `${result.name} — Free Online ${result.name} Calculators & Tools`;
  const description = `${category.apps.length} free ${result.name.toLowerCase()} tools: ${category.apps
    .slice(0, 5)
    .map((a) => a.displayName)
    .join(", ")} and more. No login required.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://ewory.com${category.path}`,
    },
    openGraph: {
      title,
      description,
      url: `https://ewory.com${category.path}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = getThemeBySlug(slug);
  const applications = Object.values(apps).find((category) =>
    category.path?.includes(slug),
  );

  if (!applications || !result) {
    return <div className="mt-8 mb-20">Category not found.</div>;
  }

  const { name, theme } = result;

  return (
    <div className="mt-8 mb-20">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{theme.icon}</span>
        <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${theme.badge}`}
        >
          {applications.apps.length} applications
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {applications.apps.map((application) => (
          <Link
            key={application.route}
            href={`/apps/${application.route}`}
            className={`group flex items-start gap-3 rounded-xl border border-gray-200 border-l-4 ${theme.accent} bg-white p-4 transition-all duration-200 ${theme.hoverBorder} hover:shadow-md hover:-translate-y-0.5`}
          >
            <span className="text-xl mt-0.5 flex-shrink-0">
              {appIcons[application.route] ?? "🔧"}
            </span>
            <div className="min-w-0">
              <h3
                className={`text-sm font-semibold text-gray-900 group-hover:${theme.text} transition-colors`}
              >
                {application.displayName}
              </h3>
              <p className="mt-0.5 text-xs text-gray-500 leading-relaxed line-clamp-2">
                {application.shortDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
