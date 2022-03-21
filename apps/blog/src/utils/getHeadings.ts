function getHeadings(): string[] {
  if (typeof document === 'undefined') return [];
  const headings = document.getElementsByClassName('heading') as HTMLCollection;
  return Array.from(headings).map((e: HTMLHtmlElement) => e.id);
}

export default getHeadings;
