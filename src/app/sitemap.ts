import { MetadataRoute } from "next";
import { apps } from "@/applications";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ewory.com";
  const now = new Date().toISOString();

  // Home page
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Category pages
  Object.values(apps).forEach((category) => {
    routes.push({
      url: `${baseUrl}${category.path}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // Individual app pages
  Object.values(apps).forEach((category) => {
    category.apps.forEach((app) => {
      routes.push({
        url: `${baseUrl}/apps/${app.route}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return routes;
}
