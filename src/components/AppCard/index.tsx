import Link from "next/link";
import { App } from "@/types/types";

interface Props {
  application: App;
  index: number;
  isAppSuggestionsBar?: boolean;
}

export default function AppCard({ application }: Props) {
  return (
    <Link
      href={`/apps/${application.route}`}
      className="group flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
    >
      <span className="text-xl mt-0.5 flex-shrink-0">
        {application.emoji ?? "🔧"}
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
  );
}
