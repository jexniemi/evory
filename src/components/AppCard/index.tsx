import Image from "next/image";
import Link from "next/link";
import { getAppIconPath } from "@/utils";

interface Props {
  application: { route: string; displayName: string; shortDescription: string };
  index: number;
  isAppSuggestionsBar?: boolean;
}

export default function AppCard({ application, isAppSuggestionsBar }: Props) {
  return (
    <div
      className={`card sm:mr-10 mt-8 w-80 bg-base-100 shadow-lg border pt-8 self-stretch cursor-pointer flex-grow ${
        isAppSuggestionsBar ? "pt-8" : ""
      }`}
    >
      <Link href={`${application.route}`}>
        <div>
          <figure>
            <Image
              src={getAppIconPath(application.route)}
              width={36}
              height={36}
              alt={application.displayName}
              priority={true}
              className="w-auto h-auto object-contain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{application.displayName}</h2>
            <p>{application.shortDescription}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
