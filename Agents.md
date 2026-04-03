# Rules

- Tables in info.mdx should always be written with html tags. They need to work in mobile, so make sure they have "overflow-x-auto" wrappers. Do not write too many tables with large texts, prioritize mobile first content.

- Everything needs to work in mobile

# SEO Rules

1. **Every page needs 600–900+ words of unique content** in its info.mdx. Thin pages don't rank.

2. **info.mdx template:** formula → worked example → reference table → FAQ (3–5 questions) → related tools (internal links) → authoritative sources.

3. **FAQ component:** Always use `<FAQ items={[{ q, a }]} />` imported from `@/components/FAQ`. This renders a DaisyUI accordion AND injects FAQPage JSON-LD structured data for Google rich results. Never write FAQ sections as plain markdown headings.

4. **Target "People Also Ask"** — FAQ questions should match real search queries users type into Google.

5. **Internal linking:** Every info.mdx must link to 4–5 related tools using markdown links (`[Tool Name](/apps/slug)`). This spreads link equity and keeps users on site.

6. **External authority sources:** Cite 2–4 reputable sources (WHO, CDC, Investopedia, government sites, etc.) at the bottom of every info.mdx.

7. **One H1 per page** — The page component handles the H1 (title prop). info.mdx content should start with H2 (`##`) headings only.

8. **Metadata:** Each page.tsx must export proper metadata with unique title, description (150–160 chars), and keywords. Title format: "Tool Name – Free Online Calculator | ewory.com".

9. **Semantic HTML:** Use proper heading hierarchy (H2 → H3 → H4). Never skip levels.

10. **Alt text on all images.** Every img or Image component must have descriptive alt text.

11. **Page speed:** No heavy client-side libraries. Prefer static rendering (default in Next.js App Router). Keep JavaScript bundles small.

12. **Canonical URLs:** Already handled by the layout — do not add duplicate canonical tags.

13. **JSON-LD WebApplication schema:** Already injected by the Page component — do not duplicate.

14. **Sitemap:** Auto-generated at /sitemap.xml via src/app/sitemap.xml/route.ts. New apps are included automatically from applications.json.

15. **robots.txt and meta robots:** Configured in next.config.mjs headers — do not add conflicting meta robots tags.

# Files

- src/app/apps has all apps. Each app consists of: page.tsx (wraps the app in App wrapper), the app's own component file, and info.mdx.

- The info.mdx files need 600+ words for SEO, source links, and internal links to related apps.

- applications.ts contains route configs and display names for each app.

- next.config.mjs — do not touch.

- applications need to be UNIQUE. Before creating new application, check that similar app does not already exist in applications.json
