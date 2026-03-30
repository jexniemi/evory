"use client";

import { usePathname } from "next/navigation";
import { getThemeByRoute } from "@/utils/categoryTheme";

export default function PageAccent({
  title,
  instructions,
}: {
  title: string;
  instructions: string;
}) {
  const pathname = usePathname();
  // Extract the app route from /sovellus/{route}
  const route = pathname.replace("/sovellus/", "");
  const theme = getThemeByRoute(route);

  return (
    <div className={`border-l-4 ${theme.accent} pl-5`}>
      <h1 className="text-3xl break-words">{title}</h1>
      <p className="mt-5 text-gray-600">{instructions}</p>
    </div>
  );
}
