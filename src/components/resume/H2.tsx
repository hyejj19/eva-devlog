interface H2Props {
  subTitle: string;
}

export const H2 = ({ subTitle }: H2Props) => {
  return <h2 className="text-xl font-semibold mb-3">{subTitle}</h2>;
};
