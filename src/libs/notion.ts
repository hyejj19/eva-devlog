const checkEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://example.com';

  return base_url;
};

// TODO: 캐시, revalidation 옵션 등 추가 셋팅

// 블로그 목록 가져오기
export const getPosts = async () => {
  const response = await fetch(checkEnvironment().concat('/api/posts'));
  const data = response.json();

  return data;
};

// 블로그 콘텐츠 가져오기
export const getPostContent = async (id: string) => {
  const response = await fetch(checkEnvironment().concat(`/api/post?id=${id}`));
  const data = response.json();

  return data;
};
