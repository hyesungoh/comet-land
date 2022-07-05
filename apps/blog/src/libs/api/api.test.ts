import fs from 'fs';

import {
  getAllCategories,
  getAllPosts,
  getAllPostsByCategory,
  getPostBySlugAndCategory,
  getPostsPathByCategory,
} from './api';

describe('blog - libs - api', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should defined getAllCategories', () => {
    expect(getAllCategories).toBeDefined();
  });

  test('getAllCategories should return only categories, not files', () => {
    const MOCK_READ_DIR = ['Foo', 'Bar', 'manifest.json', '.DS_Store'];
    (jest.spyOn(fs, 'readdirSync') as jest.Mock).mockReturnValue(MOCK_READ_DIR);

    const result = getAllCategories();

    expect(result).toHaveLength(2);
    expect(result).toContain(MOCK_READ_DIR[0]);
    expect(result).toContain(MOCK_READ_DIR[1]);
  });

  it('should defined getPostsPathByCategory', () => {
    expect(getPostsPathByCategory).toBeDefined();
  });

  test('getPostsPathByCategory should return markdown files', () => {
    const MOCK_READ_DIR = ['Foo.md', 'Bar.md'];
    (jest.spyOn(fs, 'readdirSync') as jest.Mock).mockReturnValue(MOCK_READ_DIR);

    const result = getPostsPathByCategory('Foo');

    expect(result).toHaveLength(2);
    expect(result).toContain(MOCK_READ_DIR[0]);
    expect(result).toContain(MOCK_READ_DIR[1]);
  });

  test('getPostsPathByCategory should return empty array when called with invalid category', () => {
    const MOCK_READ_DIR = ['Foo.md', 'Bar.md'];
    (jest.spyOn(fs, 'readdirSync') as jest.Mock).mockReturnValue(MOCK_READ_DIR);

    const result = getPostsPathByCategory('.DS_Store');

    expect(result).toHaveLength(0);
  });

  const MOCK_FILE_CONTENT = `---
title: 'Foo'
subtitle: 'foo foo foo'
date: 2022-01-01 17:50:00
category: 'Foo'
---

## foo

Lorem ipsum dolor sit amet consectetur adipisicing elit.`;

  it('should defined getPostsBySlugAndCategory', () => {
    expect(getPostBySlugAndCategory).toBeDefined();
  });

  test('getPostsBySlugAndCategory should return slug without .md', () => {
    const MOCK_SLUG = 'foo.md';
    (jest.spyOn(fs, 'readFileSync') as jest.Mock).mockReturnValue(MOCK_FILE_CONTENT);

    const result = getPostBySlugAndCategory(MOCK_SLUG, 'category', ['slug']);
    const correctResult = MOCK_SLUG.replace('.md', '');

    expect(result.slug).toBe(correctResult);
  });

  test('getPostsBySlugAndCategory should return category', () => {
    const MOCK_CATEGORY = 'Foo';
    (jest.spyOn(fs, 'readFileSync') as jest.Mock).mockReturnValue(MOCK_FILE_CONTENT);

    const result = getPostBySlugAndCategory('slug', MOCK_CATEGORY, ['category']);

    expect(result.category).toBe(MOCK_CATEGORY);
  });

  test('getPostsBySlugAndCategory should return content', () => {
    (jest.spyOn(fs, 'readFileSync') as jest.Mock).mockReturnValue(MOCK_FILE_CONTENT);

    const result = getPostBySlugAndCategory('slug', 'category', ['content']);

    expect(result.content).toContain('## foo');
    expect(result.content).toContain('Lorem ipsum');
  });

  test('getPostsBySlugAndCategory should return ISO date', () => {
    (jest.spyOn(fs, 'readFileSync') as jest.Mock).mockReturnValue(MOCK_FILE_CONTENT);

    const result = getPostBySlugAndCategory('slug', 'category', ['date']);
    const correctDate = new Date('2022-01-01 17:50:00').toISOString().slice(0, 10);

    expect(result.date).toBe(correctDate);
  });

  test('getPostsBySlugAndCategory should return undefined when called with wrong filed', () => {
    (jest.spyOn(fs, 'readFileSync') as jest.Mock).mockReturnValue(MOCK_FILE_CONTENT);

    const result = getPostBySlugAndCategory('slug', 'category', ['foo']);

    expect(result.foo).toBeFalsy();
    expect(result.foo).toBe(undefined);
  });

  it('should defined getAllPostsByCategory', () => {
    expect(getAllPostsByCategory).toBeDefined();
  });

  test('getAllPostsByCategory return recently sorted posts', () => {
    (jest.spyOn(fs, 'readdirSync') as jest.Mock).mockReturnValue(['', '']);

    const MOCK_BEFORE_FILE = `---
date: 2022-01-01 17:50:00
---

before
`;

    const MOCK_AFTER_FILE = `---
date: 2022-01-02 17:50:00
---

after
`;

    (jest.spyOn(fs, 'readFileSync') as jest.Mock).mockReturnValueOnce(MOCK_AFTER_FILE);
    (jest.spyOn(fs, 'readFileSync') as jest.Mock).mockReturnValueOnce(MOCK_BEFORE_FILE);

    const result = getAllPostsByCategory('category', ['date']);
    const firstItemDate = new Date(result[0].date);
    const secondItemDate = new Date(result[1].date);

    expect(firstItemDate > secondItemDate).toBeTruthy();
    expect(firstItemDate < secondItemDate).toBeFalsy();
  });

  it('should defined getAllPosts', () => {
    expect(getAllPosts).toBeDefined();
  });

  test('getAllPosts return all posts', () => {
    const categories = getAllCategories();
    const posts: unknown[] = [];
    categories.forEach(category => posts.push(...getAllPostsByCategory(category, ['date'])));

    const result = getAllPosts(['date']);
    expect(result).toHaveLength(posts.length);
  });

  test('getAllPosts return recently sorted data', () => {
    const result = getAllPosts(['date']);
    if (result.length < 2) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(true).toBeTruthy();
      return;
    }

    expect(result[0].date > result[1].date).toBeTruthy();
  });
});
