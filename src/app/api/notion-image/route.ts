import { NextRequest, NextResponse } from 'next/server';

import { notion } from '../../../lib/notion/client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const blockId = searchParams.get('blockId');
  const pageId = searchParams.get('pageId');
  const prop = searchParams.get('prop') || 'Image';

  if (!blockId && !pageId) {
    return NextResponse.json(
      { error: 'blockId or pageId required' },
      { status: 400 },
    );
  }

  try {
    let url = '';

    if (blockId) {
      const block = await notion.blocks.retrieve({ block_id: blockId });
      if ('type' in block && block.type === 'image') {
        const imageBlock = block as Record<string, unknown>;
        const image = imageBlock.image as {
          type: string;
          file?: { url: string };
          external?: { url: string };
        };
        url = image.type === 'file' ? image.file!.url : image.external!.url;
      }
    } else if (pageId) {
      const page = await notion.pages.retrieve({ page_id: pageId });
      if ('properties' in page) {
        const fileProp = (page.properties as Record<string, unknown>)[prop] as {
          type: string;
          files?: Array<{
            type: string;
            file?: { url: string };
            external?: { url: string };
          }>;
        };
        if (fileProp?.type === 'files' && fileProp.files!.length > 0) {
          const file = fileProp.files![0];
          url = file.type === 'file' ? file.file!.url : file.external!.url;
        }
      }
    }

    if (!url) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    const imageResponse = await fetch(url);
    if (!imageResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch image' },
        { status: 502 },
      );
    }

    const buffer = await imageResponse.arrayBuffer();
    const contentType =
      imageResponse.headers.get('content-type') || 'image/jpeg';

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=2400, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Notion image proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
