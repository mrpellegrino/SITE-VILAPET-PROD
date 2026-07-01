'use client';

import React from 'react';
import AnimatedSection from './AnimatedSection';

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

export default function PromoCardsSection({ cards }: { cards: PromoCard[] }) {
  if (cards.length === 0) return null;

  return (
    <AnimatedSection
      id="promocoes"
      style={{
        background: 'linear-gradient(135deg, #3E3089 0%, #EA528B 100%)',
        padding: '60px 40px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.2)',
            color: '#fff',
            fontSize: '0.8rem',
            fontWeight: 700,
            padding: '0.3rem 1rem',
            borderRadius: '999px',
            marginBottom: '1rem',
            letterSpacing: '0.1em',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          🎉 PROMOÇÕES ESPECIAIS
        </div>
        <h2
          style={{
            color: '#fff',
            fontFamily: 'PoppinsStrong, sans-serif',
            fontSize: 'clamp(24px, 4vw, 40px)',
            marginBottom: '12px',
            fontWeight: 700,
          }}
        >
          Ofertas que seu Pet Merece
        </h2>
        <p
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1rem',
            marginBottom: '40px',
          }}
        >
          Aproveite nossas promoções exclusivas e cuide do seu pet com o melhor
          preço!
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '28px 24px',
                flex: '1 1 240px',
                maxWidth: '280px',
                textAlign: 'left',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  background: card.badgeColor,
                  color: '#fff',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '0 20px 0 12px',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {card.badge}
              </div>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>
                {card.emoji}
              </div>
              <h3
                style={{
                  color: '#3E3089',
                  fontFamily: 'PoppinsStrong, sans-serif',
                  fontSize: '1.1rem',
                  marginBottom: '8px',
                  marginTop: 0,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  color: '#555',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.88rem',
                  lineHeight: '1.5',
                  marginBottom: '16px',
                }}
              >
                {card.description}
              </p>
              <a
                href="?wa=promo"
                target="_self"
              >
                <button
                  style={{
                    background: card.buttonColor,
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 18px',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  {card.buttonText}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
