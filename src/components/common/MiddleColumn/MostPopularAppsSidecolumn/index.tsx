import { getRandomAppsOfTheDay } from "@/applications";
import { getAppIconPath } from "@/utils";
import Link from "next/link";
import Image from "next/image";

export default function MostPopularAppsSidecolumn() {
  const apps = getRandomAppsOfTheDay(10);

  return (
    <div className="w-full mx-10 my-5">
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold mb-2">
          Päivän sovellukset <span className="text-yellow-500">⋆</span>
        </h2>
        <div className="border-b border-black w-full"></div>
        <ul className="w-full">
          {apps.map((app, idx) => {
            return (
              <Link href={"/" + app.route} key={idx}>
                <li className="flex flex-row items-center border-t justify-center">
                  <div className="flex-col flex justify-center items-center mr-1 my-5 rounded-full bg-orange-500 w-7 h-7 text-white">
                    <div>
                      {" "}
                      <p>{idx + 1}</p>
                    </div>
                  </div>
                  <div className="flex flex-grow mx-2 break-all">
                    <b>{app.displayName}</b>
                  </div>
                  <div className="flex ml-auto w-7">
                    <Image
                      src={getAppIconPath(app.route)}
                      width={25}
                      height={25}
                      alt={app.displayName}
                      objectFit="contain"
                      priority={true}
                    />
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
