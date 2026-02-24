import { NextRequest, NextResponse } from 'next/server';

import { notion } from '../../../lib/notion/client';

export async function GET(request: NextRequest) {
  const blockId = request.nextUrl.searchParams.get('blockId');

  if (!blockId) {
    return NextResponse.json({ error: 'blockId is required' }, { status: 400 });
  }

  try {
    const block = await notion.blocks.retrieve({ block_id: blockId });

    if (!('type' in block) || block.type !== 'image') {
      return NextResponse.json({ error: 'Block is not an image' }, { status: 404 });
    }

    let imageUrl = '';
    if (block.image.type === 'external') {
      imageUrl = block.image.external.url;
    } else if (block.image.type === 'file') {
      imageUrl = block.image.file.url;
    }

    if (!imageUrl) {
      return NextResponse.json({ error: 'No image URL found' }, { status: 404 });
    }

    // Redirect to the fresh signed URL
    return NextResponse.redirect(imageUrl, {
      headers: {
        'Cache-Control': 'public, max-age=3000, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to fetch Notion image:', error);
    return NextResponse.json(
      { error: 'Failed to fetch image' },
      { status: 500 },
    );
  }
}
