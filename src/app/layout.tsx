import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';

// ─── Domínio canônico ─────────────────────────────────────────────────────────
// Atualize esta variável com o domínio real em produção
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vilapetbrasil.com.br';

// ─── Viewport ────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#EA528B',
};

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Vila Pet Brasil — Pet Shop e Banho & Tosa em Betim, MG',
    template: '%s | Vila Pet Brasil',
  },
  description:
    'Vila Pet Brasil — Pet Shop e Banho & Tosa premium em Betim, MG. Banho com água mineralizada e ionizada, tosa profissional (Line e Basic Grooming), Táxi Dog e produtos para cães, gatos e coelhos. Ligue: (31) 97516-6552.',
  keywords: [
    'pet shop betim',
    'banho e tosa betim',
    'banho e tosa betim mg',
    'pet shop betim mg',
    'táxi dog betim',
    'banho cachorro betim',
    'tosa cachorro betim',
    'banho gato betim',
    'feline basic betim',
    'vila pet brasil',
    'petshop betim mg',
    'grooming betim',
    'banho ionizado pet',
    'tosa profissional betim',
    'pet shop próximo a mim betim',
  ],
  authors: [{ name: 'Vila Pet Brasil', url: SITE_URL }],
  creator: 'Vila Pet Brasil',
  publisher: 'Vila Pet Brasil',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vila Pet Brasil — Pet Shop e Banho & Tosa em Betim, MG',
    description:
      'Especialistas em Banho e Tosa com água mineralizada, tosa profissional, Táxi Dog e produtos pet em Betim, MG.',
    url: SITE_URL,
    siteName: 'Vila Pet Brasil',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/assets/capa.webp`,
        width: 1200,
        height: 630,
        alt: 'Vila Pet Brasil — Pet Shop e Banho & Tosa em Betim, MG',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vila Pet Brasil — Pet Shop e Banho & Tosa em Betim, MG',
    description:
      'Especialistas em Banho e Tosa com água mineralizada, tosa profissional, Táxi Dog e produtos pet em Betim, MG.',
    images: [`${SITE_URL}/assets/capa.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    apple: '/favicon.ico',
  },
  category: 'pets',
};

// ─── Places API (rating dinâmico) ────────────────────────────────────────────
async function fetchPlaceRating(): Promise<{ rating: number; reviewCount: number }> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID ?? 'ChIJeWKoXlLDpgARKv9CqRkhQGw';
  if (!apiKey) return { rating: 5, reviewCount: 87 };
  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount',
      },
      next: { revalidate: 2592000 }, // 30 dias
    });
    if (!res.ok) return { rating: 5, reviewCount: 87 };
    const data = await res.json();
    return {
      rating: data.rating ?? 5,
      reviewCount: data.userRatingCount ?? 87,
    };
  } catch {
    return { rating: 5, reviewCount: 87 };
  }
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
function buildLocalBusinessJsonLd(rating: number, reviewCount: number) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': 'PetStore',
    description:
      'Pet Shop especializado em Banho e Tosa com água mineralizada e ionizada, tosa profissional, Táxi Dog e produtos para cães, gatos e coelhos em Betim, MG.',
    url: SITE_URL,
    telephone: '+55-31-97516-6552',
    email: 'contato@vilapetbrasil.com.br',
    image: `${SITE_URL}/assets/vila-pet-logo-05.webp`,
    logo: `${SITE_URL}/assets/logo5.svg`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'BRL',
    paymentAccepted: 'Cash, Credit Card, Debit Card, PIX',
    areaServed: {
      '@type': 'City',
      name: 'Betim',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(rating),
      bestRating: '5',
      worstRating: '1',
      reviewCount: String(reviewCount),
    },
    sameAs: [
      'https://www.instagram.com/vilapetbrasil',
      `https://api.whatsapp.com/send/?phone=5531975166552`,
    ],
  };

  return [
    {
      ...baseData,
      '@id': `${SITE_URL}/#unidade-espirito-santo`,
      name: 'Vila Pet Brasil - Unidade Espírito Santo',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Osvaldo Rodrigues Pereira, 540',
        addressLocality: 'Betim',
        addressRegion: 'MG',
        postalCode: '32673-120',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -19.9676,
        longitude: -44.1984,
      },
    },
    {
      ...baseData,
      '@id': `${SITE_URL}/#unidade-jardim-da-cidade`,
      name: 'Vila Pet Brasil - Unidade Jardim da Cidade',
      telephone: '+55-31-3531-8518',
      sameAs: [
        'https://www.instagram.com/vilapetbrasil',
        'https://api.whatsapp.com/send/?phone=553135318518',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Edmeia Matos Lazzarotti, 2418',
        addressLocality: 'Betim',
        addressRegion: 'MG',
        postalCode: '32604-270',
        addressCountry: 'BR',
      },
    },
  ];
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual o melhor pet shop e banho e tosa em Betim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Vila Pet Brasil é a referência em Betim para banho e tosa de excelência. Contamos com um ambiente totalmente preparado e seguro, profissionais capacitados e utilizamos apenas produtos hipoalergênicos da mais alta qualidade, com duchas mineralizadoras e água ionizada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vocês oferecem serviço de Táxi Dog em Betim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim! A Vila Pet Brasil oferece o serviço de Táxi Dog na região de Betim/MG para buscar e levar seu pet com total segurança e conforto para nossos serviços de estética animal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais tipos de banho vocês oferecem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oferecemos o banho A Essência, com shampoos hipoalergênicos e duchas mineralizadoras. Também realizamos banho para gatos (Feline Basic) e coelhos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vocês fazem banho para retirada de carrapatos e pulgas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não realizamos banhos antiparasitários. Por segurança dos demais animais atendidos, não aceitamos pets com infestação de carrapatos ou pulgas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Com quantos dias o filhote pode tomar banho no pet shop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O filhote pode ser atendido 21 dias após a última dose do protocolo inicial de vacinas. Em geral, os filhotes tomam 3 doses de vacina, então o banho só é liberado 21 dias depois da terceira dose.',
      },
    },
    {
      '@type': 'Question',
      name: 'A Vila Pet Brasil atende gatos e coelhos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Oferecemos o Feline Basic (Banho e Tosa Higiênica completos para gatos) e banho especializado para coelhos, sempre de maneira segura e adaptada para diminuir o estresse do animal.',
      },
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Vila Pet Brasil',
      item: SITE_URL,
    },
  ],
};

// ─── Layout ───────────────────────────────────────────────────────────────────
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { rating, reviewCount } = await fetchPlaceRating();
  const localBusinessJsonLd = buildLocalBusinessJsonLd(rating, reviewCount);

  return (
    <html lang="pt-BR">
      <head>
        <link rel="llms" href="/llms.txt" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PT7TLLVF');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google Ads Global Site Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10855972679" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10855972679');
        `,
          }}
        />
        {/* JSON-LD — LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {/* JSON-LD — FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* JSON-LD — BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PT7TLLVF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <script
          type="module"
          async
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fvilapetbra2773back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.17"
        />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" />
      </body>
    </html>
  );
}
