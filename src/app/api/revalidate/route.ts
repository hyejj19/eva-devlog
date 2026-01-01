import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// Vercel On-demand Revalidation API
export async function POST(request: NextRequest) {
  // 인증 토큰 검증
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (token !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  try {
    const body = await request.json();

    // 특정 slug 재검증 (선택사항)
    if (body.slug) {
      revalidatePath(`/posts/${body.slug}`);
    }

    // 전체 경로 재검증
    revalidatePath('/');
    revalidatePath('/posts');

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to revalidate' },
      { status: 500 },
    );
  }
}

// GET 요청 지원 (간단한 재검증)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  revalidatePath('/');
  revalidatePath('/posts');

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
  });
}
