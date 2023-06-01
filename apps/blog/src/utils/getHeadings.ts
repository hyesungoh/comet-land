export interface Heading {
  id: string;
  text: string;
}

function getHeadings() {
  if (typeof document === 'undefined') return [];

  const headings = document.querySelectorAll<HTMLHeadingElement>('.heading');

  return Array.from(headings).map(element => ({
    id: element.id,
    text: element.innerText,
  }));
}

export default getHeadings;
