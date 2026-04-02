"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getRandomApps } from "../../applications";
import { App } from "@/types/types";
import MiddleColumn from "@/components/common/MiddleColumn";
import Link from "next/link";

export default function AppSuggestionBar() {
  const path = usePathname();
  const [appSuggestions, setAppSuggestions] = useState<App[]>([]);

  useEffect(() => {
    setAppSuggestions(getRandomApps(path, 3));
  }, [path]);

  if (path === "/" || appSuggestions.length === 0) {
    return null;
  }

  return (
    <MiddleColumn location="appsuggestionbar">
      <div className="py-10">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xl">🔍</span>
          <h5 className="text-lg font-bold text-gray-900">Try these too</h5>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {appSuggestions.map((application) => (
            <Link
              key={application.route}
              href={`/apps/${application.route}`}
              className="group relative flex flex-col items-center text-center rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-main"
            >
              <span className="text-4xl mb-3">{application.emoji ?? "🔧"}</span>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-main transition-colors">
                {application.displayName}
              </h3>
              <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                {application.shortDescription}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-main opacity-0 group-hover:opacity-100 transition-opacity">
                Kokeile ilmaiseksi →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </MiddleColumn>
  );
}
