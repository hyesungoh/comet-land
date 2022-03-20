export function getLocalDate(str: string) {
  const regex = /"/gi;
  const date = new Date(str.replace(regex, ''));
  return date.toLocaleDateString();
}
