const fs = require("fs");

type Path = {
  params: {
    slug: string[] | false;
  };
};

export const generateSitemap = async (paths: Path[]) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const routes = paths.map((path: Path) => {
    const route = !path.params.slug ? "" : path.params.slug.join("/");
    const url = `${siteUrl}/${route}`;

    return `
        <url>
            <loc>${`${url}`}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${routes.join("")}
        </urlset>`;

  //Create robots.txt structure
  const robots = `Sitemap: ${siteUrl}sitemap.xml
    User-agent: *
    Allow: /*
    Disallow: /api/*`;

  //Create robots.txt and sitemap.xml files in public folder
  fs.writeFileSync("public/robots.txt", robots);
  fs.writeFileSync("public/sitemap.xml", sitemap);
};
