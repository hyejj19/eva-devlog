import { NextResponse } from 'next/server';
import { database_id } from '../../../constants';
import { PostResp } from '../../../types/NotionTypes';
import { NextApiPostInfoResp } from '../../../types/NextApiTypes';

// post list 받아오는 api
export async function GET() {
  const response = await fetch(
    `https://api.notion.com/v1/databases/${database_id}/query`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        sorts: [
          {
            property: 'published',
            direction: 'descending',
          },
        ],
      }),
    }
  );

  // 응답 내용 확인
  const responseText = await response.text();
  try {
    const responseJson = JSON.parse(responseText);
    const postsInfo = responseJson.results.map((res: PostResp) => {
      return {
        id: res.id,
        tags: res.properties.Tags.multi_select[0].name,
        title: res.properties.title.title[0].text.content,
        createdAt: res.created_time,
        slug: res.properties.slug.rich_text[0].text.content,
      };
    });
    return NextResponse.json(postsInfo);
  } catch (e) {
    console.error('Failed to parse JSON response:', responseText);
    throw e;
  }
}
