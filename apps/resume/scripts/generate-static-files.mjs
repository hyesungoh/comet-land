import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { format } from 'prettier';

const configDirectory = join(process.cwd(), '_config');
const { resumeUrl } = JSON.parse(readFileSync(join(configDirectory, 'index.json')));

// sitemap
function generateSitemap() {
  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${resumeUrl}</loc>
    </url>
  </urlset>
  `;

  const formattedSitemap = format(sitemap, { parser: 'html' });
  writeFileSync('public/sitemap.xml', formattedSitemap);
}

function generateRobots() {
  const robots = `User-agent: *
Sitemap: ${resumeUrl}/sitemap.xml`;

  writeFileSync('public/robots.txt', robots);
}

generateSitemap();
generateRobots();
