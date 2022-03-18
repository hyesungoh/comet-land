// SO WET!!
// 'lib/api'

const fs = require('fs');
const path = require('path');
const { join } = path;
const matter = require('gray-matter');

const postsDirectory = join(process.cwd(), '_content');

function isValidCategory(value) {
  if (value.includes('.')) return false;
  return true;
}

function isVaildFile(value) {
  if (value[0] === '.') return false;
  return true;
}

function getAllCategories() {
  const allCategories = fs.readdirSync(postsDirectory);
  const allCategoriesWithoutDot = allCategories.filter(category => isValidCategory(category));
  return allCategoriesWithoutDot;
}

function getPostsPathByCategory(category) {
  if (isVaildFile(category)) return fs.readdirSync(`${postsDirectory}/${category}`);
  return [];
}

function getPostBySlugAndCategory(slug, category, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${category}/`, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
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

function getAllPostsByCategory(category, field = []) {
  const slugs = getPostsPathByCategory(category);
  const posts = slugs
    .filter(slug => isVaildFile(slug))
    .map(slug => getPostBySlugAndCategory(slug, category, field))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
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

const allPosts = getAllPosts(['title', 'date', 'slug']);
const allCategories = getAllCategories();

fs.writeFileSync('./_content/manifest.json', JSON.stringify({ posts: allPosts, categories: allCategories }), 'utf-8');
