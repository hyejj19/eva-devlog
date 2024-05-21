interface H2Props {
  subTitle: string;
}

export const H2 = ({ subTitle }: H2Props) => {
  return (
    <h2 className="text-lg font-light mb-3 underline underline-offset-4">
      {subTitle}
    </h2>
  );
};
