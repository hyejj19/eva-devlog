export interface HeadingItem {
  level: 2 | 3;
  text: string;
}

export const extractHeadings = (text: string): HeadingItem[] => {
  const lines = text.split('\n');

  const headings = lines
    .filter((line) => line.startsWith('## ') || line.startsWith('### '))
    .map((line): HeadingItem => {
      const level: 2 | 3 = line.startsWith('### ') ? 3 : 2;
      const headingText = line
        .replace(/^#{2,3}\s+/, '')
        .replace(/\*\*/g, '')
        .trim();
      return { level, text: headingText };
    });

  return headings;
};
