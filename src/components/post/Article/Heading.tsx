import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level?: 2 | 3;
}

// children에서 텍스트 추출 (볼드 유무 관계없이)
function extractText(children: React.ReactNode): string {
  if (typeof children === 'string') {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(extractText).join('');
  }
  if (React.isValidElement(children) && children.props?.children) {
    return extractText(children.props.children);
  }
  return '';
}

export const Heading = ({ children, level = 3 }: HeadingProps) => {
  const headingText = extractText(children);
  const Tag = level === 2 ? 'h2' : 'h3';

  return (
    <Tag className="scroll-mt-[100px]" id={headingText}>
      {children}
    </Tag>
  );
};
