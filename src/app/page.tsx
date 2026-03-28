'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// WhatsApp SVG Icon
const WhatsAppIcon = () =>
<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M24.5373 7.5107C23.4285 6.39455 22.1092 5.50953 20.6558 4.9069C19.2025 4.30428 17.644 3.99604 16.0707 4.00004C9.47333 4.00004 4.10267 9.36937 4.1 15.9694C4.1 18.0787 4.65067 20.1374 5.69733 21.9534L4 28.1547L10.3453 26.4894C12.1005 27.4448 14.0669 27.9458 16.0653 27.9467H16.0707C22.6667 27.9467 28.0373 22.5774 28.04 15.9774C28.0445 14.4047 27.7373 12.8467 27.1361 11.3935C26.5349 9.94021 25.6516 8.62053 24.5373 7.5107ZM16.0707 25.9267H16.0667C14.2847 25.9269 12.5355 25.4475 11.0027 24.5387L10.64 24.3227L6.87467 25.3107L7.87867 21.64L7.64267 21.264C6.64638 19.6779 6.11898 17.8424 6.12133 15.9694C6.124 10.484 10.5867 6.02137 16.0747 6.02137C17.3817 6.01847 18.6763 6.27481 19.8835 6.77557C21.0908 7.27633 22.1868 8.01156 23.108 8.9387C24.0342 9.86143 24.7683 10.9586 25.2678 12.1667C25.7674 13.3748 26.0226 14.67 26.0187 15.9774C26.016 21.4627 21.5533 25.9267 16.0707 25.9267ZM21.528 18.4747C21.228 18.324 19.7587 17.6014 19.484 17.5014C19.2107 17.4014 19.012 17.352 18.812 17.6507C18.612 17.9494 18.0387 18.6227 17.864 18.8227C17.6893 19.0227 17.5147 19.0467 17.216 18.8974C16.9173 18.748 15.9533 18.432 14.8107 17.4134C13.9213 16.62 13.3213 15.6414 13.1467 15.3414C12.972 15.0414 13.128 14.88 13.2787 14.7307C13.4133 14.5974 13.5773 14.3814 13.7267 14.2067C13.876 14.032 13.9253 13.908 14.0253 13.708C14.1253 13.508 14.076 13.3334 14 13.184C13.9253 13.0334 13.3267 11.5614 13.0773 10.9627C12.836 10.3827 12.5893 10.46 12.4053 10.452C12.2148 10.4442 12.0241 10.4407 11.8333 10.4414C11.6817 10.4452 11.5324 10.4804 11.395 10.5446C11.2576 10.6089 11.1349 10.7008 11.0347 10.8147C10.76 11.1147 9.988 11.8374 9.988 13.3094C9.988 14.7814 11.06 16.204 11.2093 16.404C11.3587 16.604 13.3187 19.624 16.3187 20.92C17.0333 21.228 17.5907 21.412 18.024 21.5507C18.74 21.7787 19.392 21.7454 19.908 21.6694C20.4827 21.584 21.6773 20.9467 21.9267 20.248C22.176 19.5494 22.176 18.9507 22.1013 18.8254C22.0267 18.7 21.8253 18.624 21.528 18.4747Z" fill="white" />
  </svg>;


const WA_CONTACT = 'https://api.whatsapp.com/send/?phone=5531975166552&text=Ol%C3%A1,+Vila+Pet+Brasil.+Vim+pelo+seu+an%C3%BAncio+no+Google+e+gostaria+de+mais+informa%C3%A7%C3%B5es';
const WA_BANHOS = 'https://wa.me/5531975166552?text=Ol%C3%A1+Vila+Pet%21+Gost%C3%A1ria+de+saber+mais+sobre+os+banhos%21';
const WA_TOSAS = 'https://wa.me/5531975166552?text=Ol%C3%A1+Vila+Pet%21+Gost%C3%A1ria+de+saber+mais+sobre+as+tosas%21';
const WA_AGENDAR = 'https://wa.me/5531975166552?text=Ol%C3%A1+Vila+Pet%21+Gostaria+de+agendar+um+hor%C3%A1rio.';
const WA_PROMO = 'https://api.whatsapp.com/send/?phone=5531975166552&text=Ol%C3%A1,+Vila+Pet+Brasil.+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+campanha+de+primeiro+banho.';

// Fallback gallery photos shown while Contentful loads
const fallbackGalleryPhotos: GalleryPhoto[] = [
  {
    id: '1',
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_10063d1b2-1772188587338.png",
    beforeSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_1f2458221-1771888316800.png",
    alt: 'Antes e depois da tosa completa no Vila Pet Brasil',
    label: 'Tosa Completa',
    order: 1,
  },
  { id: '2', src: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecd80256-1774700162370.png", alt: 'Banho com bolhas de sabão hipoalergênico no Vila Pet Brasil', label: 'Banho Premium', order: 2 },
  { id: '3', src: "https://img.rocket.new/generatedImages/rocket_gen_img_1997ac7a4-1772712832464.png", alt: 'Gato sendo cuidado com carinho no serviço Feline Basic', label: 'Feline Basic', order: 3 },
  { id: '4', src: "https://img.rocket.new/generatedImages/rocket_gen_img_123210bed-1772244325454.png", alt: 'Higiene bucal sendo realizada em cachorro no pet shop', label: 'Higiene Bucal', order: 4 },
  { id: '5', src: "https://img.rocket.new/generatedImages/rocket_gen_img_14b3cf528-1774700160738.png", alt: 'Serviço de Táxi Dog levando pet com segurança em Betim', label: 'Táxi Dog', order: 5 },
  {
    id: '6',
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1f2458221-1771888316800.png",
    beforeSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_10063d1b2-1772188587338.png",
    alt: 'Antes e depois do resultado final no Vila Pet Brasil',
    label: 'Resultado Final',
    order: 6,
  },
];

interface GalleryPhoto {
  id: string;
  label: string;
  src: string;
  alt: string;
  beforeSrc?: string;
  order: number;
}

interface PromoCard {
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

interface PlaceReview {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

// Fallback — exibido antes da API responder ou em caso de erro
const fallbackReviews: PlaceReview[] = [
  {
    name: 'Karina Lima',
    avatar: 'https://lh3.googleusercontent.com/a-/AOh14GjZyDQxSfnvKZMVvxsfjYyRxr0qu-697WvwaXmCXw=w75-h75-p-rp-mo-br100',
    rating: 5,
    text: 'Ótimo atendimento, lugar confortável, agradável, os proprietários sabe nos orientar tá forma correta, serviço de qualidade e preço acessível, meu dog ficou lindo e cheiroso, fora o cafézinho delicioso que nos serviu. Amei tudo 😍',
    date: 'há 2 semanas',
  },
  {
    name: 'Bernardo Carvalho da Silva',
    avatar: 'https://lh3.googleusercontent.com/a-/AOh14Gj2c32HYpnecojW-ixDEEBy_tzxRq8SCxEW5kzi8A=w75-h75-p-rp-mo-br100',
    rating: 5,
    text: 'Vila Pet Brasil é sensacional! Desde o atendimento na recepção, a atenção dada aos detalhes e principalmente a forma como a Luna foi tratada. Super recomendo!',
    date: 'há 1 mês',
  },
  {
    name: 'Fernanda Oliveira',
    avatar: 'https://lh3.googleusercontent.com/a/default-user=w75-h75-p-rp-mo-br100',
    rating: 5,
    text: 'Melhor pet shop de Betim! Meu Golden ficou lindo após o banho Intense Repair Pro. Profissionais muito atenciosos e o ambiente é super limpo e organizado. Voltarei sempre!',
    date: 'há 3 semanas',
  },
  {
    name: 'Ricardo Mendes',
    avatar: 'https://lh3.googleusercontent.com/a/default-user=w75-h75-p-rp-mo-br100',
    rating: 5,
    text: 'Excelente serviço! Levei minha gata para o Feline Basic e ela foi tratada com muito cuidado. Equipe super profissional e carinhosa com os animais. Recomendo demais!',
    date: 'há 1 semana',
  },
];

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => (
  <div style={{ display: 'flex', gap: '2px' }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} width="18" height="18" viewBox="0 0 24 24" fill={star <= rating ? '#FBBC04' : '#ddd'} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

// Scroll animation hook
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// Animated section wrapper
function AnimatedSection({ children, style, className, delay = 0, id }: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const { ref, visible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      id={id}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
{
  question: 'Qual o melhor pet shop e banho e tosa em Betim?',
  answer: 'A Vila Pet Brasil é a referência em Betim para banho e tosa de excelência. Contamos com um ambiente totalmente preparado e seguro, profissionais capacitados e utilizamos apenas produtos hipoalergênicos da mais alta qualidade, com duchas mineralizadoras e água ionizada.'
},
{
  question: 'Vocês oferecem serviço de Táxi Dog em Betim?',
  answer: <>Sim! Sabemos que a sua rotina é corrida. Por isso, a Vila Pet Brasil oferece o serviço de <strong>Táxi Dog</strong> na região de Betim/MG para buscar e levar seu pet com total segurança e conforto para nossos serviços de estética animal.</>
},
{
  question: 'Vocês fazem banho para retirada de carrapatos e pulgas?',
  answer: <>Não realizamos banhos antiparasitários. Por segurança dos demais animais atendidos, não aceitamos pets com infestação de carrapatos ou pulgas, pois o risco de contaminação cruzada é alto. Caso seja encontrado <strong>algum parasita isolado</strong> durante o atendimento, a família é avisada imediatamente. Se houver <strong>infestação</strong>, o pet é devolvido para que o tutor providencie o tratamento antiparasitário adequado antes de retornar.</>
},
{
  question: 'Com quantos dias o filhote pode tomar banho no pet shop?',
  answer: <>O filhote pode ser atendido <strong>21 dias após a última dose do protocolo inicial de vacinas</strong>. Em geral, os filhotes tomam 3 doses de vacina, então o banho só é liberado 21 dias depois da terceira dose. Esse prazo existe para garantir a segurança do seu pet, já que o sistema imunológico precisa estar completamente protegido antes do contato com o ambiente do pet shop.</>
},
{
  question: 'A Vila Pet Brasil atende gatos e coelhos?',
  answer: <>Sim. O nosso atendimento não se limita apenas aos cães. Oferecemos o <strong>Feline Basic</strong> (Banho e Tosa Higiênica completos para gatos) e banho especializado para <strong>coelhos</strong>, sempre de maneira segura e adaptada para diminuir o estresse do animal.</>
}];


export default function HomePage() {
  const [showPopup, setShowPopup] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const [promoCards, setPromoCards] = useState<PromoCard[]>([]);
  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhoto[]>(fallbackGalleryPhotos);

  useEffect(() => { setSliderPos(50); }, [activeGalleryIndex]);

  const updateSlider = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = sliderContainerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSliderPos(Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
  };

  useEffect(() => {
    fetch('/api/promo-cards')
      .then((r) => r.json())
      .then((data) => { if (data.cards?.length > 0) setPromoCards(data.cards); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch('/api/gallery')
      .then((r) => r.json())
      .then((data) => { if (data.photos?.length > 0) setGalleryPhotos(data.photos); })
      .catch(() => {});
  }, []);

  const [reviews, setReviews] = useState<PlaceReview[]>(fallbackReviews);
  const [overallRating, setOverallRating] = useState<number>(5);
  const [totalReviews, setTotalReviews] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((data) => {
        if (data.reviews?.length > 0) setReviews(data.reviews);
        if (data.rating) setOverallRating(data.rating);
        if (data.totalReviews) setTotalReviews(data.totalReviews);
      })
      .catch(() => { /* mantém fallback */ });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#fafafa', overflowX: 'hidden' }}>
      {/* POPUP */}
      {showPopup &&
      <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowPopup(false)}>X</button>
            <Image
            src="/assets/banner-1.png"
            alt="promoção de primeiro banho"
            width={640}
            height={480}
            style={{ width: '100%', height: 'auto', display: 'block' }} />
          
            <div style={{ padding: '1rem', display: 'flex', justifyContent: 'center' }}>
              <a href={WA_PROMO} target="_blank" rel="noopener noreferrer">
                <button className="vpb-button" style={{ width: '280px' }}>
                  <WhatsAppIcon />
                  Usar Cupom!
                </button>
              </a>
            </div>
          </div>
        </div>
      }

      {/* HEADER */}
      <header style={{
        width: '100%',
        zIndex: 2,
        background: 'linear-gradient(rgba(234,82,139,0.15) 0%, rgba(234,82,139,0.15) 105.42%)',
        boxShadow: 'rgba(0,0,0,0.1) 2px 4px 10px',
        backdropFilter: 'blur(20px)',
        position: 'fixed',
        top: 0,
        left: 0
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginRight: '30px',
          paddingLeft: '2rem'
        }}>
          <Image
            src="/assets/logo5.svg"
            alt="Logotipo Vila Pet Brasil"
            width={120}
            height={80}
            style={{ height: '7rem', width: 'auto', padding: '1rem' }} />
          
          {/* Desktop Nav */}
          <div className="hidden md:flex" style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
              {[['Banhos', 'section-banhos'], ['Tosas', 'section-tosas'], ['Outros Serviços', 'outros-servicos'], ['Unidades', 'unidades']].map(([label, id]) =>
              <li key={id} style={{ marginRight: '50px' }}>
                  <button
                  onClick={() => scrollTo(id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'PoppinsStrong, sans-serif', fontWeight: 400, fontSize: '20px', lineHeight: '27px', color: '#EA528B' }}>
                  
                    {label}
                  </button>
                </li>
              )}
            </ul>
            <a href="tel:+5531975166552">
              <button style={{
                cursor: 'pointer',
                width: '230px',
                height: '48px',
                borderRadius: '10px',
                backgroundColor: '#CB60B3',
                border: 'none',
                fontSize: '18px',
                color: 'white',
                fontFamily: 'Poppins, sans-serif'
              }}>
                ☏ (31) 97516-6552
              </button>
            </a>
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}>
            
            <Image
              src="/assets/menuBotao.svg"
              alt="Abrir Menu"
              width={32}
              height={32} />
            
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen &&
      <div style={{
        position: 'fixed',
        top: 0,
        left: '5%',
        width: '95%',
        height: '100vh',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
      }}>
          <div style={{ backgroundColor: 'white', width: '80%', padding: '25px', minHeight: '400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <Image
              src="/assets/vila-pet-logo-05.webp"
              alt="Logotipo Vila Pet Brasil Menu Lateral"
              width={120}
              height={80}
              style={{ height: '80px', width: 'auto' }} />
            
              <button onClick={() => setMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <Image src="/assets/botaoativo.svg" alt="Fechar Menu" width={25} height={25} />
              </button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              {[['Banhos', 'section-banhos'], ['Tosas', 'section-tosas'], ['Outros Serviços', 'outros-servicos'], ['Unidades', 'unidades']].map(([label, id]) =>
            <li key={id} style={{ marginTop: '32px' }}>
                  <button
                onClick={() => scrollTo(id)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', fontSize: '18px', lineHeight: '27px', color: '#3E3089' }}>
                
                    {label}
                  </button>
                </li>
            )}
            </ul>
          </div>
        </div>
      }

      {/* HERO SECTION */}
      <section id="chamada" style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '7rem',
        minHeight: '100vh',
        flexWrap: 'wrap'
      }}>
        <Image
          src="/assets/capa.webp"
          alt="Foto de cachorro recebendo cuidados no Pet Shop Vila Pet Brasil em Betim"
          width={800}
          height={700}
          priority
          style={{ width: '45%', minWidth: '300px', objectFit: 'cover', flex: '1 1 300px' }} />
        
        <div style={{
          width: '45%',
          minWidth: '300px',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '80px',
          flex: '1 1 300px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h1 style={{
              fontFamily: 'Ubuntu, sans-serif',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 'clamp(40px, 5vw, 72px)',
              lineHeight: '1.15',
              color: '#3D3D3D'
            }}>
              A pet do seu{' '}
              <span style={{ color: '#EA528B' }}>Pet!</span>
            </h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1rem',
              fontWeight: 'normal',
              marginBottom: '1rem',
              color: '#3D3D3D',
              lineHeight: '1.6'
            }}>
              Especialistas em cuidar do seu Pet com o que há de melhor de{' '}
              <strong>Banho e Tosa e PetShop em BETIM-MG</strong>.
            </h2>
            <a href={WA_CONTACT} target="_blank" rel="noopener noreferrer" style={{ marginTop: '16px', marginBottom: '16px' }}>
              <button className="vpb-button" style={{ width: '100%', maxWidth: '327px' }}>
                <WhatsAppIcon />
                Entre em contato
              </button>
            </a>
            <a href="tel:3135923665" style={{ marginTop: '8px' }}>
              <button className="vpb-button" style={{ width: '100%', maxWidth: '327px', background: '#3E3089' }}>
                ☏ Ligue Para mais informações
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ===== PROMOÇÕES EM DESTAQUE ===== */}
      {promoCards.length > 0 && <AnimatedSection id="promocoes" style={{
        background: 'linear-gradient(135deg, #3E3089 0%, #EA528B 100%)',
        padding: '60px 40px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: '#fff', fontSize: '0.8rem', fontWeight: 700, padding: '0.3rem 1rem', borderRadius: '999px', marginBottom: '1rem', letterSpacing: '0.1em', fontFamily: 'Poppins, sans-serif' }}>
            🎉 PROMOÇÕES ESPECIAIS
          </div>
          <h2 style={{ color: '#fff', fontFamily: 'PoppinsStrong, sans-serif', fontSize: 'clamp(24px, 4vw, 40px)', marginBottom: '12px', fontWeight: 700 }}>
            Ofertas que seu Pet Merece
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', marginBottom: '40px' }}>
            Aproveite nossas promoções exclusivas e cuide do seu pet com o melhor preço!
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {promoCards.map((card) => (
              <div key={card.id} style={{ background: '#fff', borderRadius: '20px', padding: '28px 24px', flex: '1 1 240px', maxWidth: '280px', textAlign: 'left', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: card.badgeColor, color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '6px 14px', borderRadius: '0 20px 0 12px', fontFamily: 'Poppins, sans-serif' }}>{card.badge}</div>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{card.emoji}</div>
                <h3 style={{ color: '#3E3089', fontFamily: 'PoppinsStrong, sans-serif', fontSize: '1.1rem', marginBottom: '8px', marginTop: 0 }}>{card.title}</h3>
                <p style={{ color: '#555', fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '16px' }}>{card.description}</p>
                <a href={card.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <button style={{ background: card.buttonColor, color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 18px', fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', width: '100%' }}>
                    {card.buttonText}
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>}

      {/* NOSSOS BANHOS - SERVICES */}
      <section id="section-banhos" style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '40rem',
        margin: '0',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#EA528B',
        padding: '60px 40px',
        flexWrap: 'wrap',
        gap: '40px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', maxWidth: '500px', flex: '1 1 300px' }}>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(28px, 4vw, 54px)',
            lineHeight: '1.5',
            color: '#fff'
          }}>Nossos Banhos</h2>

          <div style={{ width: '100%', marginTop: '16px' }}>
            <h3 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '36px',
              color: '#fff',
              textAlign: 'left',
              marginTop: '16px'
            }}>A ESSÊNCIA</h3>
            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '27px',
              color: '#fff',
              textAlign: 'left'
            }}>
              No nosso petshop, o banho para seu pet é um momento de cuidado e carinho, realizado com a melhor linha de shampoos do mercado pet. Utilizamos fórmulas hipoalergênicas, especialmente desenvolvidas para nutrir e proteger, proporcionando uma experiência relaxante e segura para o seu pet. Além do uso de duchas mineralizadoras para a filtragem da água utilizada no banho do seu filho de quatro patas.
            </p>
            <p style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '27px',
              color: '#fff',
              textAlign: 'left',
              marginTop: '12px'
            }}>
              Aqui no Vila Pet Brasil, cada detalhe é pensado para que seu companheiro se sinta confortável e renovado.
            </p>
          </div>

          <div style={{ width: '100%', marginTop: '40px' }}>
            <a href={WA_BANHOS} target="_blank" rel="noopener noreferrer">
              <button className="vpb-button" style={{ width: '100%', maxWidth: '327px', background: '#3E3089' }}>
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
          style={{ borderRadius: '16px', maxWidth: '400px', width: '100%', flex: '1 1 250px', objectFit: 'cover' }} />
        
      </section>

      {/* NOSSAS TOSAS */}
      <section id="section-tosas" style={{
        padding: '100px 80px 130px',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '40px'
      }}>
        <div style={{ maxWidth: '500px', flex: '1 1 300px' }}>
          <h2 style={{
            fontFamily: 'PoppinsStrong, sans-serif',
            fontWeight: 400,
            fontSize: '32px',
            lineHeight: '48px',
            textAlign: 'center',
            color: '#3D3D3D',
            marginBottom: '16px'
          }}>Nossas Tosas</h2>

          {/* Line Grooming */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px 0 0 16px',
              width: '90%',
              padding: '16px'
            }}>
              <h3 style={{
                fontFamily: 'PoppinsStrong, sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                textAlign: 'right',
                color: '#3D3D3D',
                marginTop: '0'
              }}>Line Grooming</h3>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                textAlign: 'right',
                color: '#3D3D3D',
                opacity: 0.9
              }}>Tosa realizada com uso de tesoura em cães e gatos. Mantendo toda a beleza e charme da pelagem do seu pet</p>
            </div>
            <div className="card-tosas-detalhe" />
          </div>

          {/* Basic Grooming */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px', marginBottom: '16px' }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px 0 0 16px',
              width: '90%',
              padding: '16px'
            }}>
              <h3 style={{
                fontFamily: 'PoppinsStrong, sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                textAlign: 'right',
                color: '#3D3D3D',
                marginTop: '0'
              }}>Basic Grooming</h3>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                textAlign: 'right',
                color: '#3D3D3D',
                opacity: 0.9
              }}>Tosa feita na maquina em cães e gatos, para quem prefere a praticidade dos pelos curtos.</p>
            </div>
            <div className="card-tosas-detalhe" />
          </div>

          <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'center' }}>
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
          style={{ borderRadius: '16px', maxWidth: '450px', width: '100%', flex: '1 1 250px', objectFit: 'cover' }} />
        
      </section>

      {/* ===== GALERIA DE FOTOS ===== */}
      <AnimatedSection id="galeria" style={{
        padding: '60px 40px',
        backgroundColor: '#fdf5ee',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#EA528B', fontFamily: 'PoppinsStrong, sans-serif', fontSize: 'clamp(24px, 4vw, 36px)', marginBottom: '8px', fontWeight: 700 }}>
          Galeria de Fotos
        </h2>
        <p style={{ color: '#777', fontFamily: 'Poppins, sans-serif', fontSize: '1rem', marginBottom: '36px' }}>
          Veja o resultado do nosso trabalho com amor e dedicação 🐾
        </p>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Main featured image */}
          {galleryPhotos[activeGalleryIndex].beforeSrc ? (
            /* ===== ANTES / DEPOIS SLIDER ===== */
            <div
              ref={sliderContainerRef}
              onPointerDown={(e) => { isDragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); updateSlider(e); }}
              onPointerMove={(e) => { if (isDragging.current) updateSlider(e); }}
              onPointerUp={() => { isDragging.current = false; }}
              onPointerCancel={() => { isDragging.current = false; }}
              style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', marginBottom: '16px', height: '380px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', cursor: 'ew-resize', userSelect: 'none' }}
            >
              {/* DEPOIS (direita) — imagem de fundo */}
              <Image src={galleryPhotos[activeGalleryIndex].src} alt={galleryPhotos[activeGalleryIndex].alt} fill style={{ objectFit: 'cover' }} />
              {/* ANTES (esquerda) — clipado pela posição do slider */}
              <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
                <Image src={galleryPhotos[activeGalleryIndex].beforeSrc!} alt="antes" fill style={{ objectFit: 'cover' }} />
              </div>
              {/* Linha divisória */}
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${sliderPos}%`, width: '2px', background: '#fff', transform: 'translateX(-50%)', pointerEvents: 'none' }}>
                {/* Handle circular */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40px', height: '40px', borderRadius: '50%', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                  <span style={{ fontSize: '14px', color: '#EA528B', fontWeight: 700, lineHeight: 1 }}>◀</span>
                  <span style={{ fontSize: '14px', color: '#EA528B', fontWeight: 700, lineHeight: 1 }}>▶</span>
                </div>
              </div>
              {/* Labels ANTES / DEPOIS */}
              <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', fontFamily: 'Poppins, sans-serif', pointerEvents: 'none' }}>ANTES</div>
              <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(234,82,139,0.85)', color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', fontFamily: 'Poppins, sans-serif', pointerEvents: 'none' }}>DEPOIS</div>
              {/* Label do card */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.6))', padding: '24px 20px 16px', pointerEvents: 'none' }}>
                <span style={{ color: '#fff', fontFamily: 'PoppinsStrong, sans-serif', fontSize: '1.1rem', fontWeight: 600 }}>{galleryPhotos[activeGalleryIndex].label}</span>
              </div>
            </div>
          ) : (
            /* ===== FOTO SIMPLES ===== */
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', marginBottom: '16px', height: '380px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
              <Image src={galleryPhotos[activeGalleryIndex].src} alt={galleryPhotos[activeGalleryIndex].alt} fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.6))', padding: '24px 20px 16px' }}>
                <span style={{ color: '#fff', fontFamily: 'PoppinsStrong, sans-serif', fontSize: '1.1rem', fontWeight: 600 }}>{galleryPhotos[activeGalleryIndex].label}</span>
              </div>
            </div>
          )}
          {/* Thumbnails */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {galleryPhotos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setActiveGalleryIndex(index)}
                style={{
                  padding: 0,
                  border: index === activeGalleryIndex ? '3px solid #EA528B' : '3px solid transparent',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  width: '90px',
                  height: '70px',
                  position: 'relative',
                  flexShrink: 0,
                  transition: 'border-color 0.2s',
                  background: 'none',
                }}
              >
                <Image src={photo.src} alt={photo.alt} fill style={{ objectFit: 'cover' }} />
                {photo.beforeSrc && (
                  <div style={{ position: 'absolute', bottom: '3px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(234,82,139,0.9)', color: '#fff', fontSize: '0.55rem', fontWeight: 700, padding: '1px 5px', borderRadius: '999px', fontFamily: 'Poppins, sans-serif', whiteSpace: 'nowrap' }}>A/D</div>
                )}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ===== AVALIAÇÕES DO GOOGLE ===== */}
      <AnimatedSection id="avaliacoes" style={{
        backgroundColor: '#3E3089',
        padding: '60px 20px',
        textAlign: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84z" fill="#EA4335" />
          </svg>
          <h2 style={{ color: '#fff', fontFamily: 'PoppinsStrong, sans-serif', fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 700, margin: 0 }}>
            Avaliações no Google
          </h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '40px' }}>
          <span style={{ color: '#FBBC04', fontFamily: 'PoppinsStrong, sans-serif', fontSize: '2.5rem', fontWeight: 700 }}>{overallRating.toFixed(1)}</span>
          <div>
            <StarRating rating={Math.round(overallRating)} />
            <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', margin: '4px 0 0' }}>
              {totalReviews ? `${totalReviews} avaliações no Google` : 'Baseado em avaliações reais'}
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>
          {reviews.map((review, index) => (
            <div key={index} style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '24px',
              width: '280px',
              flex: '1 1 240px',
              maxWidth: '300px',
              textAlign: 'left',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Image
                  src={review.avatar}
                  alt={`Foto de perfil de ${review.name}`}
                  width={40}
                  height={40}
                  style={{ borderRadius: '50%', objectFit: 'cover', width: '40px', height: '40px' }}
                />
                <div>
                  <div style={{ fontFamily: 'PoppinsStrong, sans-serif', fontSize: '0.9rem', color: '#3D3D3D', fontWeight: 600 }}>{review.name}</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', color: '#999' }}>{review.date}</div>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', lineHeight: '1.6', color: '#555', marginTop: '10px' }}>
                {review.text}
              </p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '36px' }}>
          <a href="https://www.google.com/search?q=Vila+Pet+Brasil+Betim" target="_blank" rel="noopener noreferrer">
            <button style={{ background: '#fff', color: '#3E3089', border: 'none', borderRadius: '999px', padding: '12px 28px', fontFamily: 'PoppinsStrong, sans-serif', fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
              Ver todas as avaliações no Google ↗
            </button>
          </a>
        </div>
      </AnimatedSection>

      {/* GOOGLE MAP */}
      <div className="google-map">
        <iframe
          title="Localização Vila Pet Brasil - Rua Osvaldo Rodrigues Pereira 540, Betim MG"
          frameBorder="0"
          style={{ border: 0, width: '100%', height: '450px' }}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDk89J4FSunMF33ruMVWJaJht_Ro0kvoXs&q=Rua+Osvaldo+Rodrigues+Pereira+540+Bairro+Espirito+Santo+Betim+MG"
          allowFullScreen
          loading="lazy" />
        
      </div>

      {/* OUTROS SERVICOS */}
      <section id="outros-servicos" style={{
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '40px 80px 50px'
      }}>
        <a
          href={WA_CONTACT}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', width: '100%' }}>
          
          <h2 style={{
            fontFamily: 'PoppinsStrong, sans-serif',
            fontWeight: 400,
            fontSize: '32px',
            lineHeight: '48px',
            textAlign: 'center',
            color: '#3D3D3D',
            marginBottom: '24px'
          }}>Outros Serviços</h2>
          <div style={{ display: 'flex', flexDirection: 'row', justifyItems: 'center', flexWrap: 'wrap', justifyContent: 'center', gap: '0' }}>
            {/* Column 1 */}
            <div style={{ width: '50%', minWidth: '300px', flex: '1 1 300px' }}>
              {[
              { img: '/assets/higienepng.webp', alt: 'Serviço de Higiene Bucal para Pets', title: 'Higiene Bucal', desc: 'A escovação dentes regularmente, previne a formação de tartaros e perda dentária.' },
              { img: '/assets/desenmboloc.webp', alt: 'Técnica de desembolo de pelos para cachorro', title: 'Desembolo', desc: 'Não precisa raspar seu pet temos uma técnica de remoção de desembolo em cães.' },
              { img: '/assets/unsplash_yMSecCHsIBc.webp', alt: 'Gato tomando banho - Feline Basic', title: 'Feline Basic', desc: 'Gato Banho e Tosa Higiênica- Banho, tosa higiênica, corte de unhas, higienização específica da região dos olhos e higienização dos ouvidos.' }].
              map((item) =>
              <div key={item.title} style={{
                display: 'flex',
                flexDirection: 'row',
                width: '90%',
                height: '150px',
                backgroundColor: 'white',
                boxShadow: 'rgba(0,0,0,0.1) 2px 4px 10px',
                borderRadius: '16px',
                margin: '10px',
                overflow: 'hidden'
              }}>
                  <Image
                  src={item.img}
                  alt={item.alt}
                  width={150}
                  height={150}
                  style={{ borderRadius: '16px', objectFit: 'cover', objectPosition: 'center top', width: '150px', height: '150px', flexShrink: 0 }} />
                
                  <div style={{ marginLeft: '10px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '30px', color: '#3D3D3D', textAlign: 'left', marginTop: '0' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '13px', lineHeight: '20px', color: '#3D3D3D', margin: '5px', textAlign: 'left' }}>{item.desc}</p>
                  </div>
                </div>
              )}
            </div>
            {/* Column 2 */}
            <div style={{ width: '50%', minWidth: '300px', flex: '1 1 300px' }}>
              {[
              { img: '/assets/coelhos.webp', alt: 'Coelho tomando banho', title: 'Banho em coelhos', desc: 'Oferecemos banho em coelho, de maneira segura e sem estresse.' },
              { img: '/assets/carding.webp', alt: 'Serviço de Carding - Remoção de subpelos', title: 'Carding', desc: 'Técnica de remoção de desembolo em cães.' },
              { img: '/assets/taxiDog.webp', alt: 'Serviço de Taxi Dog em Betim', title: 'Taxi-Dog', desc: 'Temos o serviço de taxi para os pets que desejam utilizar nossos serviços.' }].
              map((item) =>
              <div key={item.title} style={{
                display: 'flex',
                flexDirection: 'row',
                width: '90%',
                height: '150px',
                backgroundColor: 'white',
                boxShadow: 'rgba(0,0,0,0.1) 2px 4px 10px',
                borderRadius: '16px',
                margin: '10px',
                overflow: 'hidden'
              }}>
                  <Image
                  src={item.img}
                  alt={item.alt}
                  width={150}
                  height={150}
                  style={{ borderRadius: '16px', objectFit: 'cover', objectPosition: 'center top', width: '150px', height: '150px', flexShrink: 0 }} />
                
                  <div style={{ marginLeft: '10px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '30px', color: '#3D3D3D', textAlign: 'left', marginTop: '0' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '13px', lineHeight: '20px', color: '#3D3D3D', margin: '5px', textAlign: 'left' }}>{item.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </a>
      </section>

      {/* NOSSAS UNIDADES */}
      <section id="unidades" style={{ padding: '4rem 2rem', backgroundColor: '#fff', textAlign: 'center' }}>
        <h2 style={{ color: '#EA528B', fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 'bold', fontFamily: 'PoppinsStrong, sans-serif' }}>Nossas Unidades</h2>
        <p style={{ color: '#777', fontSize: '1rem', marginBottom: '2.5rem', fontFamily: 'Poppins, sans-serif' }}>Estamos crescendo para atender você ainda melhor!</p>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          {/* Unit 1 - Open */}
          <div style={{ flex: '1', minWidth: '260px', padding: '2rem', borderRadius: '16px', background: '#fdf5ee', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', textAlign: 'left' }}>
            <div style={{ display: 'inline-block', background: '#EA528B', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '999px', marginBottom: '1rem', letterSpacing: '0.05em', fontFamily: 'Poppins, sans-serif' }}>ABERTA</div>
            <h3 style={{ color: '#333', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'PoppinsStrong, sans-serif' }}>Unidade Espírito Santo</h3>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>
              Rua Osvaldo Rodrigues Pereira, 540<br />
              Bairro Espírito Santo — Betim, MG
            </p>
            <a
              href={WA_AGENDAR}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#EA528B', color: '#fff', padding: '0.6rem 1.2rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', fontFamily: 'Poppins, sans-serif' }}>
              
              Agendar horário
            </a>
          </div>
          {/* Unit 2 - Coming Soon */}
          <div style={{ flex: '1', minWidth: '260px', padding: '2rem', borderRadius: '16px', background: '#f5f5f5', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', textAlign: 'left', opacity: 0.85 }}>
            <div style={{ display: 'inline-block', background: '#aaa', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '999px', marginBottom: '1rem', letterSpacing: '0.05em', fontFamily: 'Poppins, sans-serif' }}>EM BREVE</div>
            <h3 style={{ color: '#333', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'PoppinsStrong, sans-serif' }}>Segunda Unidade</h3>
            <p style={{ color: '#777', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>
              Betim, MG<br />
              Em breve mais detalhes!
            </p>
            <span style={{ display: 'inline-block', background: '#ddd', color: '#999', padding: '0.6rem 1.2rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, fontFamily: 'Poppins, sans-serif' }}>Em breve</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas-frequentes" style={{ padding: '4rem 2rem', backgroundColor: '#fdf5ee', textAlign: 'center' }}>
        <h2 style={{ color: '#EA528B', fontSize: '2rem', marginBottom: '2rem', fontWeight: 'bold', fontFamily: 'PoppinsStrong, sans-serif' }}>Dúvidas Frequentes</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {faqItems.map((item, index) =>
          <div
            key={index}
            style={{ padding: '1.5rem', borderRadius: '12px', background: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', cursor: 'pointer' }}
            onClick={() => toggleFaq(index)}>
            
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ color: '#EA528B', fontSize: '1.1rem', fontWeight: 600, fontFamily: 'PoppinsStrong, sans-serif', marginTop: 0, flex: 1, paddingRight: '16px' }}>{item.question}</h3>
                <span style={{ color: '#EA528B', fontSize: '1.2rem', fontWeight: 'bold', flexShrink: 0 }}>{openFaq === index ? '−' : '+'}</span>
              </div>
              {openFaq === index &&
            <p style={{ color: '#555', lineHeight: '1.6', fontSize: '1rem', marginTop: '0.8rem', fontFamily: 'Poppins, sans-serif' }}>{item.answer}</p>
            }
            </div>
          )}
        </div>
        <p style={{ marginTop: '2rem', color: '#777', fontSize: '0.9rem', fontFamily: 'Poppins, sans-serif' }}>Conteúdo validado pela equipe técnica especializada da Vila Pet Brasil - Atualizado em Março/2026.</p>
      </section>

      {/* FOOTER */}
      <footer style={{
        marginTop: '80px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#EA528B',
        padding: '40px 20px',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        <Image
          src="/assets/vila-pet-logo-03.png"
          alt="Logo Vila Pet Brasil Betim"
          width={180}
          height={100}
          style={{ width: '180px', height: 'auto' }} />
        
        <div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ margin: '16px', fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '16px', lineHeight: '24px', textAlign: 'center', color: 'white' }}>
              <a href="/politica-de-privacidade.html" style={{ textDecoration: 'none', color: 'white' }}>Política de Privacidade</a>
            </li>
          </ul>
        </div>
        <div>
          <div style={{ marginBottom: '8px', fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: 'white', opacity: 0.8 }}>Nossos Contatos</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
            { href: 'https://www.instagram.com/vilapetbrasil', label: '@vilapetbrasil' },
            { href: 'tel:+5531975166552', label: '+55 (31) 97516-6552' },
            { href: 'tel:+553135923665', label: '+55 (31) 3592-3665' },
            { href: 'mailto:contato@vilapetbrasil.com.br', label: 'contato@vilapetbrasil.com.br' }].
            map((contact) =>
            <li key={contact.href} style={{ margin: '16px', fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '16px', lineHeight: '24px', textAlign: 'left', color: 'white' }}>
                <a href={contact.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>{contact.label}</a>
              </li>
            )}
          </ul>
        </div>
        <address style={{ marginTop: '55px', marginBottom: '55px', fontStyle: 'normal' }}>
          <div style={{ marginBottom: '8px', fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: 'white', opacity: 0.8 }}>Endereço:</div>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '16px', lineHeight: '24px', textAlign: 'left', color: 'white' }}>Rua Osvaldo Rodrigues Pereira, 540,</p>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '16px', lineHeight: '24px', textAlign: 'left', color: 'white' }}>Bairro Espírito Santo</p>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '16px', lineHeight: '24px', textAlign: 'left', color: 'white' }}>Betim — MG</p>
        </address>
      </footer>

      {/* ===== FLOATING WHATSAPP BUTTON (all screens) ===== */}
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
    </div>);

}
