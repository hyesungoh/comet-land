import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypePrism from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkRehype).use(rehypePrism).use(rehypeStringify).process(markdown);
  return result.toString();
}
