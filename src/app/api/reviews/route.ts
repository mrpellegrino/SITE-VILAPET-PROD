import { NextResponse } from 'next/server';

const PLACE_ID = process.env.GOOGLE_PLACE_ID ?? 'ChIJeWKoXlLDpgARKv9CqRkhQGw';
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export interface PlaceReview {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json({ error: 'GOOGLE_PLACES_API_KEY not configured' }, { status: 500 });
  }

  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;

  const res = await fetch(url, {
    headers: {
      'X-Goog-Api-Key': API_KEY,
      'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
      'Accept-Language': 'pt-BR',
    },
    next: { revalidate: 2592000 }, // cache por 30 dias (~1 chamada/mês)
  });

  if (!res.ok) {
    const body = await res.text();
    return NextResponse.json({ error: 'Places API error', detail: body }, { status: 502 });
  }

  const data = await res.json();

  const reviews: PlaceReview[] = (data.reviews ?? [])
    .filter((r: any) => r.rating === 5)
    .map((r: any) => ({
      name: r.authorAttribution?.displayName ?? 'Anônimo',
      avatar: r.authorAttribution?.photoUri ?? '',
      rating: r.rating ?? 5,
      text: r.text?.text ?? r.originalText?.text ?? '',
      date: r.relativePublishTimeDescription ?? '',
    }));

  return NextResponse.json({
    reviews,
    rating: data.rating ?? null,
    totalReviews: data.userRatingCount ?? null,
  });
}
