"use client";

import Link from "next/link";
import { apps } from "../../applications";
import MiddleColumn from "../common/MiddleColumn";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

export default function Header() {
  const path = usePathname();
  return (
    <header>
      <div className="flex w-full flex-col">
        <MiddleColumn>
          <div className="z-50 flex flex-row items-center py-5">
            <Link href="/">
              <Image
                src="/logowhite.png"
                alt="logo"
                width={120}
                height={120}
                className="hidden dark:block"
              />
              <Image
                className="block dark:hidden"
                src="/logo.png"
                alt="light-mode-image"
                width={120}
                height={120}
              />
              {/* <div className="text-gray-500 text-xs">
                Laskurit ja selainsovellukset
              </div> */}
            </Link>
          </div>
        </MiddleColumn>
        <div className="flex w-full flex-col">
          <div className="divider h-0 m-0"></div>
        </div>
        <MiddleColumn overflow backgroundColor="bg-background">
          <nav className="flex flex-row py-4">
            <HeaderItem path="/" name="Home" selected={path === "/"} />
            {Object.entries(apps).map(([name, category], idx) => (
              <React.Fragment key={idx}>
                <HeaderItem
                  key={idx}
                  name={name}
                  path={category.path}
                  selected={category.path === path}
                />
                {category.path === path && (
                  <div className="h-5 w-5 absolute mb-5 background-red-500"></div>
                )}
              </React.Fragment>
            ))}
          </nav>
        </MiddleColumn>
        <div className="flex w-full flex-col">
          <div className="divider h-0 m-0"></div>
        </div>
      </div>
    </header>
  );
}

const HeaderItem = ({
  name,
  path,
  selected,
}: {
  name: string;
  path: string;
  selected: boolean;
}) => {
  return (
    <Link href={"" + path}>
      <div
        className={`text-l mr-8 font-bold cursor-pointer ${
          selected
            ? "underline underline-offset-8 decoration-4 decoration-main"
            : ""
        }`}
      >
        {name}
      </div>
    </Link>
  );
};
