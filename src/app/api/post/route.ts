import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const properties = await fetch('https://api.notion.com/v1/pages/' + id, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_KEY}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
  });

  const content = await fetch(
    'https://api.notion.com/v1/blocks/' + id + '/children?page_size=100',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
    }
  );

  const propertiesRes = await properties.json();
  const { results: contentRes } = await content.json();

  const result = {
    propertiesRes,
    contentRes,
  };

  return NextResponse.json(result);
}
