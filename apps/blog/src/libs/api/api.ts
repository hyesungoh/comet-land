import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const cwd = process.cwd();
// NOTE: Trinomial for test:coverage environment
const postsDirectory = join(cwd, cwd.endsWith('blog') ? '_content' : 'apps/blog/_content');

function isValidCategory(value: string) {
  if (value.includes('.')) return false;
  return true;
}

function isVaildFile(value: string) {
  if (value[0] === '.') return false;
  return true;
}

function getLocalDate(str: string) {
  const regex = /"/gi;
  const date = new Date(str.replace(regex, ''));
  return date.toISOString().slice(0, 10);
}

export function getAllCategories() {
  const allCategories = fs.readdirSync(postsDirectory);
  const allCategoriesWithoutDot = allCategories.filter(category => isValidCategory(category));
  return allCategoriesWithoutDot;
}

export function getPostsPathByCategory(category: string) {
  if (isVaildFile(category)) return fs.readdirSync(`${postsDirectory}/${category}`);
  return [];
}

type Items = {
  [key: string]: string;
};

export function getPostBySlugAndCategory(slug: string, category: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${category}/`, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);

  const items: Items = {};

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

export function getAllPostsByCategory(category: string, fields: string[] = []) {
  const slugs = getPostsPathByCategory(category);
  const posts = slugs
    .filter(slug => isVaildFile(slug))
    .map(slug => getPostBySlugAndCategory(slug, category, fields))
    .sort((post1, post2) => {
      const post1Date = new Date(post1.date);
      const post2Date = new Date(post2.date);
      return post1Date.getTime() > post2Date.getTime() ? -1 : 1;
    });
  return posts;
}

export function getAllPosts(fields: string[] = []) {
  const categories = getAllCategories();

  const posts: Items[] = [];
  categories.forEach(category => {
    const postsByCategories = getAllPostsByCategory(category, fields);
    posts.push(...postsByCategories);
  });

  posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
