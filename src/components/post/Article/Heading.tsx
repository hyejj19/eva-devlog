interface HeadingProps {
  children: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
  const heading = children ? children[0]?.props?.children[0] : 'heading';

  return (
    <h3 className="scroll-mt-[100px]" id={`${heading}`}>
      {heading}
    </h3>
  );
};
