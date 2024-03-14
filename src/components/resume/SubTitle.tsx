interface SubTitleProps {
  name: string;
  team: string;
  startDate: string;
  endDate: string | '재직중' | '진행중';
}
export const SubTitle = ({ name, team, startDate, endDate }: SubTitleProps) => {
  return (
    <div className="flex flex-col space-y-1 pb-2 mb-6 border-b border-gray-100 dark:border-gray-600">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-xs text-gray-400">
        {`${team} | ${startDate} ~ `}
        {endDate !== '재직중' && endDate !== '진행중' && `${endDate}`}
        {(endDate === '재직중' || '진행중') && (
          <span className="text-main-teal">{endDate}</span>
        )}
      </p>
    </div>
  );
};
