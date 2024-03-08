export const extractHeadings = (text: string) => {
  const lines = text.split('\n');

  const headings = lines.filter((line) => line.startsWith('### '));

  return headings;
};
