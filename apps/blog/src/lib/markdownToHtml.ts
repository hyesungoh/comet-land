import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAddClasses from 'rehype-add-classes';
import rehypePrism from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAddClasses, { 'h1,h2': 'heading' })
    .use(rehypePrism, { ignoreMissing: true })
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
