import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Popup from '@/components/Popup';
import PromoCardsSection, { PromoCard } from '@/components/PromoCardsSection';
import GaleriaSlider, { GalleryPhoto } from '@/components/GaleriaSlider';
import AvaliacoesSection, { PlaceReview } from '@/components/AvaliacoesSection';
import FaqAccordion from '@/components/FaqAccordion';

const WA_CONTACT =
  'https://api.whatsapp.com/send/?phone=5531975166552&text=Ol%C3%A1,+Vila+Pet+Brasil.+Vim+pelo+seu+an%C3%BAncio+no+Google+e+gostaria+de+mais+informa%C3%A7%C3%B5es';
const WA_BANHOS =
  'https://wa.me/5531975166552?text=Ol%C3%A1+Vila+Pet%21+Gost%C3%A1ria+de+saber+mais+sobre+os+banhos%21';
const WA_TOSAS =
  'https://wa.me/5531975166552?text=Ol%C3%A1+Vila+Pet%21+Gost%C3%A1ria+de+saber+mais+sobre+as+tosas%21';
const WA_AGENDAR =
  'https://wa.me/5531975166552?text=Ol%C3%A1+Vila+Pet%21+Gostaria+de+agendar+um+hor%C3%A1rio.';

const WhatsAppIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.5373 7.5107C23.4285 6.39455 22.1092 5.50953 20.6558 4.9069C19.2025 4.30428 17.644 3.99604 16.0707 4.00004C9.47333 4.00004 4.10267 9.36937 4.1 15.9694C4.1 18.0787 4.65067 20.1374 5.69733 21.9534L4 28.1547L10.3453 26.4894C12.1005 27.4448 14.0669 27.9458 16.0653 27.9467H16.0707C22.6667 27.9467 28.0373 22.5774 28.04 15.9774C28.0445 14.4047 27.7373 12.8467 27.1361 11.3935C26.5349 9.94021 25.6516 8.62053 24.5373 7.5107ZM16.0707 25.9267H16.0667C14.2847 25.9269 12.5355 25.4475 11.0027 24.5387L10.64 24.3227L6.87467 25.3107L7.87867 21.64L7.64267 21.264C6.64638 19.6779 6.11898 17.8424 6.12133 15.9694C6.124 10.484 10.5867 6.02137 16.0747 6.02137C17.3817 6.01847 18.6763 6.27481 19.8835 6.77557C21.0908 7.27633 22.1868 8.01156 23.108 8.9387C24.0342 9.86143 24.7683 10.9586 25.2678 12.1667C25.7674 13.3748 26.0226 14.67 26.0187 15.9774C26.016 21.4627 21.5533 25.9267 16.0707 25.9267ZM21.528 18.4747C21.228 18.324 19.7587 17.6014 19.484 17.5014C19.2107 17.4014 19.012 17.352 18.812 17.6507C18.612 17.9494 18.0387 18.6227 17.864 18.8227C17.6893 19.0227 17.5147 19.0467 17.216 18.8974C16.9173 18.748 15.9533 18.432 14.8107 17.4134C13.9213 16.62 13.3213 15.6414 13.1467 15.3414C12.972 15.0414 13.128 14.88 13.2787 14.7307C13.4133 14.5974 13.5773 14.3814 13.7267 14.2067C13.876 14.032 13.9253 13.908 14.0253 13.708C14.1253 13.508 14.076 13.3334 14 13.184C13.9253 13.0334 13.3267 11.5614 13.0773 10.9627C12.836 10.3827 12.5893 10.46 12.4053 10.452C12.2148 10.4442 12.0241 10.4407 11.8333 10.4414C11.6817 10.4452 11.5324 10.4804 11.395 10.5446C11.2576 10.6089 11.1349 10.7008 11.0347 10.8147C10.76 11.1147 9.988 11.8374 9.988 13.3094C9.988 14.7814 11.06 16.204 11.2093 16.404C11.3587 16.604 13.3187 19.624 16.3187 20.92C17.0333 21.228 17.5907 21.412 18.024 21.5507C18.74 21.7787 19.392 21.7454 19.908 21.6694C20.4827 21.584 21.6773 20.9467 21.9267 20.248C22.176 19.5494 22.176 18.9507 22.1013 18.8254C22.0267 18.7 21.8253 18.624 21.528 18.4747Z"
      fill="white"
    />
  </svg>
);

// ─── Server-side data fetchers ────────────────────────────────────────────────

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID ?? 'wdnv8cq2pjki';
const CONTENTFUL_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID ?? 'ChIJeWKoXlLDpgARKv9CqRkhQGw';

const fallbackReviews: PlaceReview[] = [
  {
    name: 'Karina Lima',
    avatar:
      'https://lh3.googleusercontent.com/a-/AOh14GjZyDQxSfnvKZMVvxsfjYyRxr0qu-697WvwaXmCXw=w75-h75-p-rp-mo-br100',
    rating: 5,
    text: 'Ótimo atendimento, lugar confortável, agradável, os proprietários sabe nos orientar tá forma correta, serviço de qualidade e preço acessível, meu dog ficou lindo e cheiroso, fora o cafézinho delicioso que nos serviu. Amei tudo 😍',
    date: 'há 2 semanas',
  },
  {
    name: 'Bernardo Carvalho da Silva',
    avatar:
      'https://lh3.googleusercontent.com/a-/AOh14Gj2c32HYpnecojW-ixDEEBy_tzxRq8SCxEW5kzi8A=w75-h75-p-rp-mo-br100',
    rating: 5,
    text: 'Vila Pet Brasil é sensacional! Desde o atendimento na recepção, a atenção dada aos detalhes e principalmente a forma como a Luna foi tratada. Super recomendo!',
    date: 'há 1 mês',
  },
  {
    name: 'Fernanda Oliveira',
    avatar:
      'https://lh3.googleusercontent.com/a/default-user=w75-h75-p-rp-mo-br100',
    rating: 5,
    text: 'Melhor pet shop de Betim! Meu Golden ficou lindo após o banho Intense Repair Pro. Profissionais muito atenciosos e o ambiente é super limpo e organizado. Voltarei sempre!',
    date: 'há 3 semanas',
  },
  {
    name: 'Ricardo Mendes',
    avatar:
      'https://lh3.googleusercontent.com/a/default-user=w75-h75-p-rp-mo-br100',
    rating: 5,
    text: 'Excelente serviço! Levei minha gata para o Feline Basic e ela foi tratada com muito cuidado. Equipe super profissional e carinhosa com os animais. Recomendo demais!',
    date: 'há 1 semana',
  },
];

async function fetchPromoCards(): Promise<PromoCard[]> {
  if (!CONTENTFUL_TOKEN) return [];
  try {
    const url = new URL(
      `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries`
    );
    url.searchParams.set('content_type', 'promoCard');
    url.searchParams.set('order', 'fields.order');
    url.searchParams.set('access_token', CONTENTFUL_TOKEN);
    const res = await fetch(url.toString(), { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items ?? []).map((item: any) => ({
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
  } catch {
    return [];
  }
}

async function fetchGalleryPhotos(): Promise<GalleryPhoto[]> {
  if (!CONTENTFUL_TOKEN) return [];
  try {
    const url = new URL(
      `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries`
    );
    url.searchParams.set('content_type', 'galleryPhoto');
    url.searchParams.set('order', 'fields.order');
    url.searchParams.set('access_token', CONTENTFUL_TOKEN);
    const res = await fetch(url.toString(), { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items ?? []).map((item: any) => ({
      id: item.sys.id,
      label: item.fields.label ?? '',
      src: item.fields.src ?? '',
      alt: item.fields.alt ?? '',
      beforeSrc: item.fields.beforeSrc ?? undefined,
      order: item.fields.order ?? 0,
    }));
  } catch {
    return [];
  }
}

async function fetchReviews(): Promise<{
  reviews: PlaceReview[];
  rating: number;
  totalReviews: number | null;
}> {
  if (!GOOGLE_API_KEY)
    return { reviews: fallbackReviews, rating: 5, totalReviews: null };
  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      {
        headers: {
          'X-Goog-Api-Key': GOOGLE_API_KEY,
          'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
          'Accept-Language': 'pt-BR',
        },
        next: { revalidate: 2592000 },
      }
    );
    if (!res.ok)
      return { reviews: fallbackReviews, rating: 5, totalReviews: null };
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
    return {
      reviews: reviews.length > 0 ? reviews : fallbackReviews,
      rating: data.rating ?? 5,
      totalReviews: data.userRatingCount ?? null,
    };
  } catch {
    return { reviews: fallbackReviews, rating: 5, totalReviews: null };
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  const [promoCards, galleryPhotos, reviewsData] = await Promise.all([
    fetchPromoCards(),
    fetchGalleryPhotos(),
    fetchReviews(),
  ]);

  return (
    <div
      style={{
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#fafafa',
        overflowX: 'hidden',
      }}
    >
      <Popup />
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section
        id="chamada"
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '7rem',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/assets/caozinho_banho.png"
          alt="Foto de cachorro recebendo cuidados no Pet Shop Vila Pet Brasil em Betim"
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
          }}
        />
        {/* Gradient overlay so text stays readable */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(255,255,255,0.96) 40%, rgba(255,255,255,0.5) 65%, rgba(255,255,255,0) 85%)',
            zIndex: 1,
          }}
        />
        <div
          className="hero-text-container"
          style={{
            position: 'relative',
            zIndex: 2,
            width: '50%',
            minWidth: '300px',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
            paddingRight: '2rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p
              style={{
                fontFamily: 'Ubuntu, sans-serif',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 'clamp(40px, 5vw, 72px)',
                lineHeight: '1.15',
                color: '#3D3D3D',
                margin: 0,
              }}
            >
              A pet do seu{' '}
              <span style={{ color: '#EA528B' }}>Pet!</span>
            </p>
            <h1
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                fontWeight: 700,
                margin: '10px 0 0',
                color: '#EA528B',
                letterSpacing: '0.01em',
                lineHeight: '1.3',
              }}
            >
              Pet Shop &amp; Banho e Tosa em Betim, MG
            </h1>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '16px',
            }}
          >
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1rem',
                fontWeight: 'normal',
                marginBottom: '1rem',
                color: '#3D3D3D',
                lineHeight: '1.6',
              }}
            >
              Especialistas em cuidar do seu Pet com o que há de melhor de{' '}
              <strong>Banho e Tosa e PetShop em BETIM-MG</strong>.
            </p>
            <a
              href={WA_CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: '16px', marginBottom: '16px' }}
            >
              <button
                className="vpb-button"
                style={{ width: '100%', maxWidth: '327px' }}
              >
                <WhatsAppIcon />
                Entre em contato
              </button>
            </a>
            <a href="tel:3135923665" style={{ marginTop: '8px' }}>
              <button
                className="vpb-button"
                style={{
                  width: '100%',
                  maxWidth: '327px',
                  background: '#3E3089',
                }}
              >
                ☏ Ligue Para mais informações
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ===== PROMOÇÕES ===== */}
      <PromoCardsSection cards={promoCards} />

      {/* ===== NOSSOS BANHOS ===== */}
      <section
        id="section-banhos"
        style={{
          display: 'flex',
          flexDirection: 'row',
          minHeight: '40rem',
          margin: '0',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: '#EA528B',
          padding: '60px 40px',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            maxWidth: '500px',
            flex: '1 1 300px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(28px, 4vw, 54px)',
              lineHeight: '1.5',
              color: '#fff',
            }}
          >
            Nossos Banhos
          </h2>
          <div style={{ width: '100%', marginTop: '16px' }}>
            <h3
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '36px',
                color: '#fff',
                textAlign: 'left',
                marginTop: '16px',
              }}
            >
              A ESSÊNCIA
            </h3>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '27px',
                color: '#fff',
                textAlign: 'left',
              }}
            >
              No nosso petshop, o banho para seu pet é um momento de cuidado e
              carinho, realizado com a melhor linha de shampoos do mercado pet.
              Utilizamos fórmulas hipoalergênicas, especialmente desenvolvidas
              para nutrir e proteger, proporcionando uma experiência relaxante e
              segura para o seu pet. Além do uso de duchas mineralizadoras para
              a filtragem da água utilizada no banho do seu filho de quatro
              patas.
            </p>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '27px',
                color: '#fff',
                textAlign: 'left',
                marginTop: '12px',
              }}
            >
              Aqui no Vila Pet Brasil, cada detalhe é pensado para que seu
              companheiro se sinta confortável e renovado.
            </p>
          </div>
          <div style={{ width: '100%', marginTop: '40px' }}>
            <a href={WA_BANHOS} target="_blank" rel="noopener noreferrer">
              <button
                className="vpb-button"
                style={{
                  width: '100%',
                  maxWidth: '327px',
                  background: '#3E3089',
                }}
              >
                <WhatsAppIcon />
                Marque um horário de banho
              </button>
            </a>
          </div>
        </div>
        <Image
          src="/assets/Paralax_bolha_fail.webp"
          alt="Bolhas de sabão - Banho Pet"
          width={400}
          height={400}
          style={{
            borderRadius: '16px',
            maxWidth: '400px',
            width: '100%',
            flex: '1 1 250px',
            objectFit: 'cover',
          }}
        />
      </section>

      {/* ===== NOSSAS TOSAS ===== */}
      <section
        id="section-tosas"
        style={{
          padding: '100px 80px 130px',
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        <div style={{ maxWidth: '500px', flex: '1 1 300px' }}>
          <h2
            style={{
              fontFamily: 'PoppinsStrong, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '48px',
              textAlign: 'center',
              color: '#3D3D3D',
              marginBottom: '16px',
            }}
          >
            Nossas Tosas
          </h2>
          {[
            {
              name: 'Line Grooming',
              desc: 'Tosa realizada com uso de tesoura em cães e gatos. Mantendo toda a beleza e charme da pelagem do seu pet',
            },
            {
              name: 'Basic Grooming',
              desc: 'Tosa feita na maquina em cães e gatos, para quem prefere a praticidade dos pelos curtos.',
            },
          ].map((tosa) => (
            <div
              key={tosa.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '16px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px 0 0 16px',
                  width: '90%',
                  padding: '16px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'PoppinsStrong, sans-serif',
                    fontWeight: 500,
                    fontSize: '18px',
                    textAlign: 'right',
                    color: '#3D3D3D',
                    marginTop: '0',
                  }}
                >
                  {tosa.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    textAlign: 'right',
                    color: '#3D3D3D',
                    opacity: 0.9,
                  }}
                >
                  {tosa.desc}
                </p>
              </div>
              <div className="card-tosas-detalhe" />
            </div>
          ))}
          <div
            style={{
              marginTop: '48px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <a href={WA_TOSAS} target="_blank" rel="noopener noreferrer">
              <button className="vpb-button" style={{ width: '327px' }}>
                <WhatsAppIcon />
                Marque horário para uma tosa
              </button>
            </a>
          </div>
        </div>
        <Image
          src="/assets/ImgTosa.webp"
          alt="Cachorro sendo tosado no Pet Shop Vila Pet Brasil"
          width={450}
          height={450}
          style={{
            borderRadius: '16px',
            maxWidth: '450px',
            width: '100%',
            flex: '1 1 250px',
            objectFit: 'cover',
          }}
        />
      </section>

      {/* ===== GALERIA DE FOTOS ===== */}
      <GaleriaSlider photos={galleryPhotos} />

      {/* ===== AVALIAÇÕES DO GOOGLE ===== */}
      <AvaliacoesSection
        reviews={reviewsData.reviews}
        rating={reviewsData.rating}
        totalReviews={reviewsData.totalReviews}
      />

      {/* ===== GOOGLE MAP ===== */}
      <div className="google-map">
        <iframe
          title="Localização Vila Pet Brasil - Rua Osvaldo Rodrigues Pereira 540, Betim MG"
          style={{ border: 0, width: '100%', height: '450px' }}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDk89J4FSunMF33ruMVWJaJht_Ro0kvoXs&q=Rua+Osvaldo+Rodrigues+Pereira+540+Bairro+Espirito+Santo+Betim+MG"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* ===== OUTROS SERVIÇOS ===== */}
      <section
        id="outros-servicos"
        style={{
          display: 'flex',
          justifyContent: 'center',
          justifyItems: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '40px 80px 50px',
        }}
      >
        <a
          href={WA_CONTACT}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', width: '100%' }}
        >
          <h2
            style={{
              fontFamily: 'PoppinsStrong, sans-serif',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '48px',
              textAlign: 'center',
              color: '#3D3D3D',
              marginBottom: '24px',
            }}
          >
            Outros Serviços
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0',
            }}
          >
            {[
              [
                {
                  img: '/assets/higienepng.webp',
                  alt: 'Serviço de Higiene Bucal para Pets',
                  title: 'Higiene Bucal',
                  desc: 'A escovação dentes regularmente, previne a formação de tartaros e perda dentária.',
                },
                {
                  img: '/assets/desenmboloc.webp',
                  alt: 'Técnica de desembolo de pelos para cachorro',
                  title: 'Desembolo',
                  desc: 'Não precisa raspar seu pet temos uma técnica de remoção de desembolo em cães.',
                },
                {
                  img: '/assets/unsplash_yMSecCHsIBc.webp',
                  alt: 'Gato tomando banho - Feline Basic',
                  title: 'Feline Basic',
                  desc: 'Gato Banho e Tosa Higiênica- Banho, tosa higiênica, corte de unhas, higienização específica da região dos olhos e higienização dos ouvidos.',
                },
              ],
              [
                {
                  img: '/assets/coelhos.webp',
                  alt: 'Coelho tomando banho',
                  title: 'Banho em coelhos',
                  desc: 'Oferecemos banho em coelho, de maneira segura e sem estresse.',
                },
                {
                  img: '/assets/carding.webp',
                  alt: 'Serviço de Carding - Remoção de subpelos',
                  title: 'Carding',
                  desc: 'Técnica de remoção de desembolo em cães.',
                },
                {
                  img: '/assets/taxiDog.webp',
                  alt: 'Serviço de Taxi Dog em Betim',
                  title: 'Taxi-Dog',
                  desc: 'Temos o serviço de taxi para os pets que desejam utilizar nossos serviços.',
                },
              ],
            ].map((column, colIndex) => (
              <div
                key={colIndex}
                style={{
                  width: '50%',
                  minWidth: '300px',
                  flex: '1 1 300px',
                }}
              >
                {column.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      width: '90%',
                      height: '150px',
                      backgroundColor: 'white',
                      boxShadow: 'rgba(0,0,0,0.1) 2px 4px 10px',
                      borderRadius: '16px',
                      margin: '10px',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.alt}
                      width={150}
                      height={150}
                      style={{
                        borderRadius: '16px',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        width: '150px',
                        height: '150px',
                        flexShrink: 0,
                      }}
                    />
                    <div
                      style={{
                        marginLeft: '10px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 500,
                          fontSize: '20px',
                          lineHeight: '30px',
                          color: '#3D3D3D',
                          textAlign: 'left',
                          marginTop: '0',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 400,
                          fontSize: '13px',
                          lineHeight: '20px',
                          color: '#3D3D3D',
                          margin: '5px',
                          textAlign: 'left',
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </a>
      </section>

      {/* ===== NOSSAS UNIDADES ===== */}
      <section
        id="unidades"
        style={{
          padding: '4rem 2rem',
          backgroundColor: '#fff',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            color: '#EA528B',
            fontSize: '2rem',
            marginBottom: '0.5rem',
            fontWeight: 'bold',
            fontFamily: 'PoppinsStrong, sans-serif',
          }}
        >
          Nossas Unidades
        </h2>
        <p
          style={{
            color: '#777',
            fontSize: '1rem',
            marginBottom: '2.5rem',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Estamos crescendo para atender você ainda melhor!
        </p>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              flex: '1',
              minWidth: '260px',
              padding: '2rem',
              borderRadius: '16px',
              background: '#fdf5ee',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                background: '#EA528B',
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.25rem 0.75rem',
                borderRadius: '999px',
                marginBottom: '1rem',
                letterSpacing: '0.05em',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              ABERTA
            </div>
            <h3
              style={{
                color: '#333',
                fontSize: '1.2rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                fontFamily: 'PoppinsStrong, sans-serif',
              }}
            >
              Unidade Espírito Santo
            </h3>
            <p
              style={{
                color: '#555',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '1rem',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Rua Osvaldo Rodrigues Pereira, 540
              <br />
              Bairro Espírito Santo — Betim, MG
            </p>
            <a
              href={WA_AGENDAR}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#EA528B',
                color: '#fff',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Agendar horário
            </a>
          </div>
          <div
            style={{
              flex: '1',
              minWidth: '260px',
              padding: '2rem',
              borderRadius: '16px',
              background: '#f5f5f5',
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              textAlign: 'left',
              opacity: 0.85,
            }}
          >
            <div
              style={{
                display: 'inline-block',
                background: '#aaa',
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.25rem 0.75rem',
                borderRadius: '999px',
                marginBottom: '1rem',
                letterSpacing: '0.05em',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              EM BREVE
            </div>
            <h3
              style={{
                color: '#333',
                fontSize: '1.2rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                fontFamily: 'PoppinsStrong, sans-serif',
              }}
            >
              Segunda Unidade
            </h3>
            <p
              style={{
                color: '#777',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '1rem',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Betim, MG
              <br />
              Em breve mais detalhes!
            </p>
            <span
              style={{
                display: 'inline-block',
                background: '#ddd',
                color: '#999',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 600,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Em breve
            </span>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FaqAccordion />

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          marginTop: '80px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
          backgroundColor: '#EA528B',
          padding: '40px 20px',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        <Image
          src="/assets/vila-pet-logo-03.png"
          alt="Logo Vila Pet Brasil Betim"
          width={180}
          height={100}
          style={{ width: '180px', height: 'auto' }}
        />
        <div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li
              style={{
                margin: '16px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px',
                textAlign: 'center',
                color: 'white',
              }}
            >
              <a
                href="/politica-de-privacidade"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div
            style={{
              marginBottom: '8px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: 'white',
              opacity: 0.8,
            }}
          >
            Nossos Contatos
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              {
                href: 'https://www.instagram.com/vilapetbrasil',
                label: '@vilapetbrasil',
              },
              { href: 'tel:+5531975166552', label: '+55 (31) 97516-6552' },
              { href: 'tel:+553135923665', label: '+55 (31) 3592-3665' },
              {
                href: 'mailto:contato@vilapetbrasil.com.br',
                label: 'contato@vilapetbrasil.com.br',
              },
            ].map((contact) => (
              <li
                key={contact.href}
                style={{
                  margin: '16px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px',
                  textAlign: 'left',
                  color: 'white',
                }}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  {contact.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <address style={{ marginTop: '55px', marginBottom: '55px', fontStyle: 'normal' }}>
          <div
            style={{
              marginBottom: '8px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: 'white',
              opacity: 0.8,
            }}
          >
            Endereço:
          </div>
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'left',
              color: 'white',
            }}
          >
            Rua Osvaldo Rodrigues Pereira, 540,
          </p>
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'left',
              color: 'white',
            }}
          >
            Bairro Espírito Santo
          </p>
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'left',
              color: 'white',
            }}
          >
            Betim — MG
          </p>
        </address>
      </footer>

      {/* ===== FLOATING WHATSAPP BUTTON ===== */}
      <a
        href={WA_CONTACT}
        aria-label="Fale conosco no WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '24px',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366',
          boxShadow: '0 4px 16px rgba(37,211,102,0.5)',
          textDecoration: 'none',
          animation: 'waPulse 2.5s infinite',
        }}
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
