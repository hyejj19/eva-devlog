interface H2Props {
  subTitle: string;
}

export const H2 = ({ subTitle }: H2Props) => {
  return <h2 className="text-2xl font-semibold mb-6">{subTitle}</h2>;
};
