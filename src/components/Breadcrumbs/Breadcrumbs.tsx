"use client";

import { getCategoryNameByRoute } from "@/applications";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  pageTitle: string;
}

export default function Breadcrumbs({ pageTitle }: BreadcrumbProps) {
  const pathname = usePathname();
  const category = getCategoryNameByRoute(pathname);
  console.log(category);
  if (!category) return <div className="py-2"></div>;
  return (
    <div className="breadcrumbs max-w-xs text-sm py-5 text-gray-400">
      <ul>
        <li className="">
          <a href={category?.categoryPath}>{category?.categoryName}</a>
        </li>
        <li className="">{pageTitle}</li>
      </ul>
    </div>
  );
}
