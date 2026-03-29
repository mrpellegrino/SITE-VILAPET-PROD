'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export interface GalleryPhoto {
  id: string;
  label: string;
  src: string;
  alt: string;
  beforeSrc?: string;
  order: number;
}

export default function GaleriaSlider({ photos }: { photos: GalleryPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    setSliderPos(50);
  }, [activeIndex]);

  const updateSlider = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSliderPos(
      Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100))
    );
  };

  if (photos.length === 0) return null;

  const current = photos[activeIndex];

  return (
    <AnimatedSection
      id="galeria"
      style={{
        padding: '60px 40px',
        backgroundColor: '#fdf5ee',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          color: '#EA528B',
          fontFamily: 'PoppinsStrong, sans-serif',
          fontSize: 'clamp(24px, 4vw, 36px)',
          marginBottom: '8px',
          fontWeight: 700,
        }}
      >
        Galeria de Fotos
      </h2>
      <p
        style={{
          color: '#777',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '1rem',
          marginBottom: '36px',
        }}
      >
        Veja o resultado do nosso trabalho com amor e dedicação 🐾
      </p>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {current.beforeSrc ? (
          /* Before/After Slider */
          <div
            ref={containerRef}
            onPointerDown={(e) => {
              isDragging.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              updateSlider(e);
            }}
            onPointerMove={(e) => {
              if (isDragging.current) updateSlider(e);
            }}
            onPointerUp={() => {
              isDragging.current = false;
            }}
            onPointerCancel={() => {
              isDragging.current = false;
            }}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              marginBottom: '16px',
              height: '380px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              cursor: 'ew-resize',
              userSelect: 'none',
            }}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              }}
            >
              <Image
                src={current.beforeSrc}
                alt={`Antes — ${current.label}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: `${sliderPos}%`,
                width: '2px',
                background: '#fff',
                transform: 'translateX(-50%)',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '2px',
                }}
              >
                <span
                  style={{
                    fontSize: '14px',
                    color: '#EA528B',
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  ◀
                </span>
                <span
                  style={{
                    fontSize: '14px',
                    color: '#EA528B',
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  ▶
                </span>
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                background: 'rgba(0,0,0,0.55)',
                color: '#fff',
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: '999px',
                fontFamily: 'Poppins, sans-serif',
                pointerEvents: 'none',
              }}
            >
              ANTES
            </div>
            <div
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(234,82,139,0.85)',
                color: '#fff',
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: '999px',
                fontFamily: 'Poppins, sans-serif',
                pointerEvents: 'none',
              }}
            >
              DEPOIS
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                padding: '24px 20px 16px',
                pointerEvents: 'none',
              }}
            >
              <span
                style={{
                  color: '#fff',
                  fontFamily: 'PoppinsStrong, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}
              >
                {current.label}
              </span>
            </div>
          </div>
        ) : (
          /* Simple photo */
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              marginBottom: '16px',
              height: '380px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            }}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                padding: '24px 20px 16px',
              }}
            >
              <span
                style={{
                  color: '#fff',
                  fontFamily: 'PoppinsStrong, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}
              >
                {current.label}
              </span>
            </div>
          </div>
        )}

        {/* Thumbnails */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => setActiveIndex(index)}
              style={{
                padding: 0,
                border:
                  index === activeIndex
                    ? '3px solid #EA528B'
                    : '3px solid transparent',
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
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
              {photo.beforeSrc && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '3px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(234,82,139,0.9)',
                    color: '#fff',
                    fontSize: '0.55rem',
                    fontWeight: 700,
                    padding: '1px 5px',
                    borderRadius: '999px',
                    fontFamily: 'Poppins, sans-serif',
                    whiteSpace: 'nowrap',
                  }}
                >
                  A/D
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
