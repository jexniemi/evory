import texts from "./texts";
import Image from "next/image";
import Link from "next/link";
import { apps } from "../../applications";
import MiddleColumn from "@/components/common/MiddleColumn";

export default function Footer() {
  return (
    <MiddleColumn location="footer">
      <div className="text-white py-20">
        <div className="flex flex-col items-center text-center md:text-left md:flex-row md:flex-wrap md:justify-between md:gap-20 md:items-start">
          {apps.map((category) => (
            <nav key={category.name} className="m-10 md:m-0">
              <p className="font-bold mb-5 text-2xl text-main">
                {category.name}
              </p>
              {category.apps.map((app) => (
                <Link href={app.route} key={app.route}>
                  <span className="block text-md mb-3 md:mb-1">
                    {app.displayName}
                  </span>
                </Link>
              ))}
            </nav>
          ))}
        </div>
        <div className="flex items-center mt-10">
          <Image src={"/favicon.png"} width={28} height={28} alt="logo" />
          <p className="inline-block font-semibold ml-1 text-main">Ewory.com</p>
        </div>
        <p className="mt-5 w-72 italic">{texts.description} © 2024 Ewory.com</p>
      </div>
    </MiddleColumn>
  );
}
