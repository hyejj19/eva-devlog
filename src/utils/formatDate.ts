export const formatDate = (createdAt: string) => {
  const date = new Date(createdAt);
  return date
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\//g, '.');
};
