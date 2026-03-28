import { NextResponse } from 'next/server';

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID ?? 'wdnv8cq2pjki';
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

export interface PromoCard {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  emoji: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  whatsappLink: string;
  order: number;
}

export async function GET() {
  if (!ACCESS_TOKEN) {
    return NextResponse.json({ error: 'CONTENTFUL_ACCESS_TOKEN not configured' }, { status: 500 });
  }

  const url = new URL(`https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries`);
  url.searchParams.set('content_type', 'promoCard');
  url.searchParams.set('order', 'fields.order');
  url.searchParams.set('access_token', ACCESS_TOKEN);

  const res = await fetch(url.toString(), {
    next: { revalidate: 300 }, // cache 5 minutos
  });

  if (!res.ok) {
    const body = await res.text();
    return NextResponse.json({ error: 'Contentful error', detail: body }, { status: 502 });
  }

  const data = await res.json();

  const cards: PromoCard[] = (data.items ?? []).map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title ?? '',
    badge: item.fields.badge ?? '',
    badgeColor: item.fields.badgeColor ?? '#EA528B',
    emoji: item.fields.emoji ?? '',
    description: item.fields.description ?? '',
    buttonText: item.fields.buttonText ?? '',
    buttonColor: item.fields.buttonColor ?? '#EA528B',
    whatsappLink: item.fields.whatsappLink ?? '',
    order: item.fields.order ?? 0,
  }));

  return NextResponse.json({ cards });
}
