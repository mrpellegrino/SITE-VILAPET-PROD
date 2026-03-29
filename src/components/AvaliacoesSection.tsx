'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export interface PlaceReview {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

const StarRating = ({ rating }: { rating: number }) => (
  <div style={{ display: 'flex', gap: '2px' }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={star <= rating ? '#FBBC04' : '#ddd'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

interface Props {
  reviews: PlaceReview[];
  rating: number;
  totalReviews: number | null;
}

export default function AvaliacoesSection({ reviews, rating, totalReviews }: Props) {
  return (
    <AnimatedSection
      id="avaliacoes"
      style={{
        backgroundColor: '#3E3089',
        padding: '60px 20px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '8px',
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84z"
            fill="#EA4335"
          />
        </svg>
        <h2
          style={{
            color: '#fff',
            fontFamily: 'PoppinsStrong, sans-serif',
            fontSize: 'clamp(22px, 4vw, 34px)',
            fontWeight: 700,
            margin: 0,
          }}
        >
          Avaliações no Google
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '40px',
        }}
      >
        <span
          style={{
            color: '#FBBC04',
            fontFamily: 'PoppinsStrong, sans-serif',
            fontSize: '2.5rem',
            fontWeight: 700,
          }}
        >
          {rating.toFixed(1)}
        </span>
        <div>
          <StarRating rating={Math.round(rating)} />
          <p
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.85rem',
              margin: '4px 0 0',
            }}
          >
            {totalReviews
              ? `${totalReviews} avaliações no Google`
              : 'Baseado em avaliações reais'}
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '24px',
              width: '280px',
              flex: '1 1 240px',
              maxWidth: '300px',
              textAlign: 'left',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '12px',
              }}
            >
              <Image
                src={review.avatar}
                alt={`Foto de perfil de ${review.name}`}
                width={40}
                height={40}
                style={{
                  borderRadius: '50%',
                  objectFit: 'cover',
                  width: '40px',
                  height: '40px',
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: 'PoppinsStrong, sans-serif',
                    fontSize: '0.9rem',
                    color: '#3D3D3D',
                    fontWeight: 600,
                  }}
                >
                  {review.name}
                </div>
                <div
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.75rem',
                    color: '#999',
                  }}
                >
                  {review.date}
                </div>
              </div>
            </div>
            <StarRating rating={review.rating} />
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.85rem',
                lineHeight: '1.6',
                color: '#555',
                marginTop: '10px',
              }}
            >
              {review.text}
            </p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '36px' }}>
        <a
          href="https://www.google.com/search?q=Vila+Pet+Brasil+Betim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              background: '#fff',
              color: '#3E3089',
              border: 'none',
              borderRadius: '999px',
              padding: '12px 28px',
              fontFamily: 'PoppinsStrong, sans-serif',
              fontSize: '0.95rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          >
            Ver todas as avaliações no Google ↗
          </button>
        </a>
      </div>
    </AnimatedSection>
  );
}
