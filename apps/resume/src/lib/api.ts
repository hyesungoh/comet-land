import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const contentDirectory = join(process.cwd(), '_content');

type Items = {
  [key: string]: string;
};

function getItems(path: string, fields: string[] = []) {
  const fileContents = fs.readFileSync(path);
  const { data } = matter(fileContents);

  const items: Items = {};

  fields.forEach(field => {
    switch (field) {
      default:
        if (typeof data[field] !== 'undefined') {
          items[field] = data[field];
        }
        break;
    }
  });

  return items;
}

export function getIntro() {
  const fullPath = join(contentDirectory, 'intro.md');
  const { heading, description } = getItems(fullPath, ['heading', 'description']);

  return { heading, description };
}

export {};
