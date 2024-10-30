"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getRandomApps } from "../../applications";
import AppCard from "@/components/AppCard";
import { Application } from "@/types/types";
import MiddleColumn from "@/components/common/MiddleColumn";

export default function AppSuggestionBar() {
  const path = usePathname();
  const [appSuggestions, setAppSuggestions] = useState<Application[]>([]);

  useEffect(() => {
    const apps = getRandomApps(path, 3);
    setAppSuggestions(apps);
  }, [path]);

  if (path === "/") {
    return null;
  }

  const renderCards = (apps: Application[]) => {
    return apps.map((application, index) => {
      return (
        <AppCard
          key={JSON.stringify(application)}
          application={application}
          index={index}
          isAppSuggestionsBar
        />
      );
    });
  };

  return (
    <MiddleColumn location="appsuggestionbar">
      <div className="py-12 bg-gray-100 dark:bg-transparent">
        <h5 className="text-lg font-bold">See also:</h5>
        <div className="flex flex-row flex-wrap w-full justify-evenly">
          {renderCards(appSuggestions)}
        </div>
      </div>
    </MiddleColumn>
  );
}
