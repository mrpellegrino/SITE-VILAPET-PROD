import { NextResponse } from 'next/server';

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID ?? 'wdnv8cq2pjki';
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

export interface GalleryPhoto {
  id: string;
  label: string;
  src: string;
  alt: string;
  beforeSrc?: string;
  order: number;
}

export async function GET() {
  if (!ACCESS_TOKEN) {
    return NextResponse.json({ error: 'CONTENTFUL_ACCESS_TOKEN not configured' }, { status: 500 });
  }

  const url = new URL(`https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries`);
  url.searchParams.set('content_type', 'galleryPhoto');
  url.searchParams.set('order', 'fields.order');
  url.searchParams.set('access_token', ACCESS_TOKEN);

  const res = await fetch(url.toString(), {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    const body = await res.text();
    return NextResponse.json({ error: 'Contentful error', detail: body }, { status: 502 });
  }

  const data = await res.json();

  const photos: GalleryPhoto[] = (data.items ?? []).map((item: any) => ({
    id: item.sys.id,
    label: item.fields.label ?? '',
    src: item.fields.src ?? '',
    alt: item.fields.alt ?? '',
    beforeSrc: item.fields.beforeSrc ?? undefined,
    order: item.fields.order ?? 0,
  }));

  return NextResponse.json({ photos });
}
