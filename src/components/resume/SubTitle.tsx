interface SubTitleProps {
  name: string;
  startDate: string;
  endDate: string | '재직중' | '진행중';
}
export const SubTitle = ({ name, startDate, endDate }: SubTitleProps) => {
  return (
    <div className="flex items-center space-y-1 space-x-2 pb-2">
      <li className="font-bold text-md list-disc">{name}</li>
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {`${startDate} ~ `}
        {endDate !== '재직중' && endDate !== '진행중' && `${endDate}`}
        {(endDate === '재직중' || endDate === '진행중') && (
          <span className="text-main-teal">{endDate}</span>
        )}
      </span>
    </div>
  );
};
