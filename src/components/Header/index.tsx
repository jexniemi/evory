"use client";

import Link from "next/link";
import { apps, CategoryName } from "../../applications";
import MiddleColumn from "../common/MiddleColumn";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { getCategoryTheme } from "@/utils/categoryTheme";

export default function Header() {
  const path = usePathname();
  return (
    <header>
      <div className="flex w-full flex-col">
        <MiddleColumn>
          <div className="z-50 flex flex-row items-center py-3">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="ewory.com logo"
                width={160}
                height={40}
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
          <nav className="flex flex-row flex-nowrap overflow-x-auto py-3 gap-x-5 sm:gap-x-7 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <HeaderItem path="/" name="Home" selected={path === "/"} />
            {Object.entries(apps).map(([name, category], idx) => (
              <React.Fragment key={idx}>
                <HeaderItem
                  key={idx}
                  name={name}
                  path={category.path}
                  selected={category.path === path}
                  decoration={getCategoryTheme(name as CategoryName).decoration}
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
  decoration,
}: {
  name: string;
  path: string;
  selected: boolean;
  decoration?: string;
}) => {
  return (
    <Link href={"" + path}>
      <div
        className={`text-sm sm:text-base mr-0 font-bold cursor-pointer whitespace-nowrap shrink-0 ${
          selected
            ? `underline underline-offset-8 decoration-4 ${decoration ?? "decoration-main"}`
            : ""
        }`}
      >
        {name}
      </div>
    </Link>
  );
};
