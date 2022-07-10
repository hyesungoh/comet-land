import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { format } from 'prettier';

import rehypeAddClasses from 'rehype-add-classes';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const postsDirectory = join(process.cwd(), '_content');

const configDirectory = join(process.cwd(), '_config');
const { blogUrl, blogDescription, blogName } = JSON.parse(readFileSync(join(configDirectory, 'index.json')));

function isValidCategory(value) {
  if (value.includes('.')) return false;
  return true;
}

function isVaildFile(value) {
  if (value[0] === '.') return false;
  return true;
}

function getLocalDate(str) {
  const regex = /"/gi;
  const date = new Date(str.replace(regex, ''));
  return date.toISOString().slice(0, 10);
}

function getAllCategories() {
  const allCategories = readdirSync(postsDirectory);
  const allCategoriesWithoutDot = allCategories.filter(category => isValidCategory(category));
  return allCategoriesWithoutDot;
}

function getPostsPathByCategory(category) {
  if (isVaildFile(category)) return readdirSync(`${postsDirectory}/${category}`);
  return [];
}

function getPostBySlugAndCategory(slug, category, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${category}/`, `${realSlug}.md`);
  const fileContents = readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach(field => {
    switch (field) {
      case 'slug':
        items[field] = realSlug;
        break;
      case 'content':
        items[field] = content;
        break;
      case 'date':
        items[field] = getLocalDate(JSON.stringify(data[field]));
        break;
      default:
        if (typeof data[field] !== 'undefined') {
          items[field] = data[field];
        }
        break;
    }
  });

  return items;
}

function getAllPostsByCategory(category, field = []) {
  const slugs = getPostsPathByCategory(category);
  const posts = slugs
    .filter(slug => isVaildFile(slug))
    .map(slug => getPostBySlugAndCategory(slug, category, field))
    .sort((post1, post2) => {
      const post1Date = new Date(post1.date);
      const post2Date = new Date(post2.date);
      return post1Date.getTime() > post2Date.getTime() ? -1 : 1;
    });
  return posts;
}

function getAllPosts(fields = []) {
  const categories = getAllCategories();

  const posts = [];
  categories.forEach(category => {
    const postsByCategories = getAllPostsByCategory(category, fields);
    posts.push(...postsByCategories);
  });

  posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

function generateContentManifest() {
  const allPosts = getAllPosts(['title', 'date', 'slug']);
  const allCategories = getAllCategories();

  writeFileSync('./_content/manifest.json', JSON.stringify({ posts: allPosts, categories: allCategories }), 'utf-8');
}

// sitemap.xml
function getSitemapTemplate(value) {
  return `
  <url>
    <loc>${blogUrl}${value}</loc>
  </url>`;
}

function generateSitemap() {
  const allPosts = getAllPosts(['slug']);
  const allCategories = getAllCategories();

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${getSitemapTemplate('')}
    ${allPosts
      .map(post => {
        const { slug } = post;
        return getSitemapTemplate(`/${slug}`);
      })
      .join('')}
    ${allCategories
      .map(category => {
        return getSitemapTemplate(`/category/${category}`);
      })
      .join('')}
  </urlset>
  `;

  const formattedSitemap = format(sitemap, { parser: 'html' });

  writeFileSync('public/sitemap.xml', formattedSitemap);
}

// robots.txt
function generateRobots() {
  writeFileSync(
    'public/robots.txt',
    `User-agent: *
Sitemap: ${blogUrl}/sitemap.xml`
  );
}

// rss.xml
async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAddClasses, { 'h1,h2': 'heading' })
    .use(rehypePrism, { ignoreMissing: true })
    .use(rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferer'] })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);
  return result.toString();
}

async function getPostsRssData() {
  const posts = getAllPosts(['title', 'date', 'slug', 'category', 'subtitle', 'content']);
  const lastPostDate = posts[0].date;

  const postsRssData = posts.map(async post => {
    const postHref = `${blogUrl}/${post.slug}`;
    const postContent = await markdownToHtml(post.content);

    return `<item>
    <title><![CDATA[${post.title}]]></title>
    <link>${postHref}</link>
    <pubDate>${post.date}</pubDate>
    <guid isPermaLink="false">${postHref}</guid>
    <description>
    <![CDATA[${post.subtitle ?? post.slug}]]>
    </description>
    <content:encoded>
      <![CDATA[${postContent}]]>
    </content:encoded>
  </item>`;
  });

  const fulfilledPostsRssData = await Promise.all(postsRssData);

  return {
    postsRssData: fulfilledPostsRssData.join(``),
    lastPostDate,
  };
}

async function generateRss() {
  const { postsRssData, lastPostDate } = await getPostsRssData();

  const rssData = `<?xml version="1.0" ?>
  <rss
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:atom="http://www.w3.org/2005/Atom"
    version="2.0"
  >
    <channel>
        <title><![CDATA[${blogName}]]></title>
        <link>${blogUrl}</link>
        <description>
          <![CDATA[${blogDescription}]]>
        </description>
        <language>en</language>
        <lastBuildDate>${lastPostDate}</lastBuildDate>
        ${postsRssData}
    </channel>
  </rss>`;

  writeFileSync('public/rss.xml', rssData);
}

generateContentManifest();
generateSitemap();
generateRobots();
generateRss();
