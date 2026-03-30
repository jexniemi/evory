import { App } from "@/types/types";
import AppCard from "../AppCard";

export default function AppCards({ apps }: { apps: App[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {apps.map((application, idx) => {
        return <AppCard key={idx} application={application} index={idx} />;
      })}
    </div>
  );
}
