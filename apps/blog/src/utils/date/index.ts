export function getLocalDate(str: string) {
  const date = new Date(str.replaceAll('"', ''));
  return date.toLocaleDateString();
}
