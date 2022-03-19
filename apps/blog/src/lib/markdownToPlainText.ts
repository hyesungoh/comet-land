import { remark } from 'remark';
import stripMarkdown from 'strip-markdown';

export default async function markdownToPlainText(markdown: string) {
  // const result = await unified().use(remarkParse).use(stripMarkdown).use(rehypeStringify).process(markdown);
  const result = await remark().use(stripMarkdown).process(markdown);
  return String(result);
}
