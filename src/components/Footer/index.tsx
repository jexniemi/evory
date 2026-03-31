import texts from "./texts";
import Image from "next/image";
import Link from "next/link";
import { apps } from "../../applications";
import MiddleColumn from "@/components/common/MiddleColumn";
import { getCategoryTheme } from "@/utils/categoryTheme";

export default function Footer() {
  const categories = Object.keys(apps);
  return (
    <MiddleColumn location="footer">
      <footer className="text-gray-300 pt-16 pb-10">
        {/* Top section: Logo + tagline */}
        <div className="mb-12">
          <Image
            src={"/logowhite.svg"}
            width={140}
            height={35}
            alt="ewory.com logo"
          />
          <p className="mt-3 max-w-sm text-sm text-gray-400 leading-relaxed">
            Free calculation and applications for study, leisure and work. All
            tools work directly in the browser — no login, no ads.
          </p>
        </div>

        {/* Category link grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-8">
          {categories.map((category) => {
            const theme = getCategoryTheme(category);
            return (
              <nav
                key={category}
                aria-label={`${category} -sovellukset`}
                className="min-w-0"
              >
                <Link
                  href={apps[category].path}
                  className="flex items-center gap-1.5 mb-3 group"
                >
                  <span className="text-base shrink-0">{theme.icon}</span>
                  <h3 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors truncate">
                    {category}
                  </h3>
                </Link>
                <ul className="space-y-1">
                  {apps[category].apps.map((app) => (
                    <li key={app.route}>
                      <Link
                        href={"/apps/" + app.route}
                        className="text-[13px] text-gray-400 hover:text-white transition-colors leading-snug block truncate"
                        title={app.shortDescription}
                      >
                        {app.displayName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          })}
        </div>

        {/* Divider */}
        <div className="mt-14 mb-6 border-t border-gray-800" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Appit.fi — Kaikki oikeudet pidätetään.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://ewory.com/"
              className="hover:text-gray-300 transition-colors"
            >
              In English: Ewory.com
            </Link>
          </div>
        </div>
      </footer>
    </MiddleColumn>
  );
}
