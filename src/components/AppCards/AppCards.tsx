import { App } from "@/types/types";
import AppCard from "../AppCard";

export default function AppCards({ apps }: { apps: App[] }) {
  return (
    <div className="flex flex-row flex-wrap justify-start w-full p-0 sm:w-full sm:flex sm:m-0 sm:mb-10 z-10">
      {apps.map((application, idx) => {
        return <AppCard key={idx} application={application} index={idx} />;
      })}
    </div>
  );
}
