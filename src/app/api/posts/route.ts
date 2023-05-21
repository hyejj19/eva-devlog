import { NextResponse } from 'next/server';
import { database_id } from '../../../constants';
import { PostResp } from '../../../types/NotionTypes';
import { NextApiPostInfoResp } from '../../../types/NextApiTypes';

export async function GET() {
  const response = await fetch(
    'https://api.notion.com/v1/databases/' + database_id + '/query',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-02-22',
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
  const { results } = await response.json();

  const postsInfo: NextApiPostInfoResp[] = results.map((res: PostResp) => {
    return {
      id: res.id,
      tags: res.properties.Tags.multi_select[0].name,
      title: res.properties.title.title[0].text.content,
      createdAt: res.created_time,
      slug: res.properties.slug.rich_text[0].text.content,
    };
  });

  return NextResponse.json(postsInfo);
}
