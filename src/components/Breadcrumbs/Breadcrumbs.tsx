"use client";

import { getCategoryNameByRoute } from "@/applications";
import { usePathname } from "next/navigation";
import { getCategoryTheme } from "@/utils/categoryTheme";

interface BreadcrumbProps {
  pageTitle: string;
}

export default function Breadcrumbs({ pageTitle }: BreadcrumbProps) {
  const pathname = usePathname();
  const category = getCategoryNameByRoute(pathname);
  if (!category) return <div className="py-2"></div>;
  const theme = getCategoryTheme(category.categoryName);
  return (
    <div className="breadcrumbs text-sm py-5 text-gray-400">
      <ul>
        <li>
          <a
            href={category.categoryPath}
            className={`inline-flex items-center gap-1.5 font-medium ${theme.text}`}
          >
            <span>{theme.icon}</span>
            {category.categoryName}
          </a>
        </li>
        <li>{pageTitle}</li>
      </ul>
    </div>
  );
}
