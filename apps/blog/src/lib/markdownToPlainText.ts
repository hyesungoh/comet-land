import { remark } from 'remark';
import stripMarkdown from 'strip-markdown';

export default async function markdownToPlainText(markdown: string) {
  const result = await remark().use(stripMarkdown).process(markdown);
  return String(result);
}
