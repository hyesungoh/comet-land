import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_content');

export function getAllCategories() {
  return fs.readdirSync(postsDirectory);
}

export function getPostsPathByCategory(category: string) {
  return fs.readdirSync(`${postsDirectory}/${category}`);
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
        items[field] = JSON.stringify(data[field]);
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

export function getAllPostsByCategory(category: string, field: string[] = []) {
  const slugs = getPostsPathByCategory(category);
  const posts = slugs
    .map(slug => getPostBySlugAndCategory(slug, category, field))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
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
