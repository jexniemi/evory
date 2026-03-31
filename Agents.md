Every page (info.mdx) follows the SEO template: formula → worked example → reference table → FAQ (3–5 questions targeting "People Also Ask") → related tools (internal links) → authoritative sources.

# Files

- src/app/sovellus has all apps. The apps consists of: page.tsx base file (wraps the app in <App> wrapper), the app's own component file, and info.mdx.
- The info.mdx files need to have good amount of text for SEO optimization, and source links as well if possible. Interlinking applications is also recommended.
- applications.json contains route configs and display names for each app
- next.config.mjs do not touch
