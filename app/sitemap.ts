import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://upra.pt";
  const lastModified = new Date();

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${base}/servicos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${base}/precos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/contacto`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/sobre`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/trabalho`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${base}/politica-privacidade`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/termos`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/cookies`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
