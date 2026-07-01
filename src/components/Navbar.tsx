'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const WA_CONTACT = '?wa=contato';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems: [string, string][] = [
    ['Banhos', 'section-banhos'],
    ['Tosas', 'section-tosas'],
    ['Outros Serviços', 'outros-servicos'],
    ['Unidades', 'unidades'],
    ['Trabalhe Conosco', 'trabalhe-conosco'],
  ];

  return (
    <>
      <header
        style={{
          width: '100%',
          zIndex: 2,
          background: 'linear-gradient(rgba(234,82,139,0.15) 0%, rgba(234,82,139,0.15) 105.42%)',
          boxShadow: 'rgba(0,0,0,0.1) 2px 4px 10px',
          backdropFilter: 'blur(20px)',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: '30px',
            paddingLeft: '2rem',
          }}
        >
          <Image
            src="/assets/logo5.svg"
            alt="Logotipo Vila Pet Brasil"
            width={120}
            height={80}
            style={{ height: '7rem', width: 'auto', padding: '1rem' }}
          />

          {/* Desktop Nav */}
          <div
            className="hidden md:flex"
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <ul
              style={{
                padding: 0,
                margin: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              {navItems.map(([label, id]) => (
                <li key={id} style={{ marginRight: '50px' }}>
                  <button
                    onClick={() => scrollTo(id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'PoppinsStrong, sans-serif',
                      fontWeight: 400,
                      fontSize: '20px',
                      lineHeight: '27px',
                      color: '#EA528B',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                    }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
            <a href={WA_CONTACT} target="_self">
              <button
                style={{
                  cursor: 'pointer',
                  width: '200px',
                  height: '48px',
                  borderRadius: '10px',
                  backgroundColor: '#EA528B',
                  border: 'none',
                  fontSize: '18px',
                  color: 'white',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                }}
              >
                💬 Fale Conosco
              </button>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            <Image src="/assets/menuBotao.svg" alt="Abrir Menu" width={32} height={32} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: '5%',
            width: '95%',
            height: '100vh',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              width: '80%',
              padding: '25px',
              minHeight: '400px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}
            >
              <Image
                src="/assets/vila-pet-logo-05.webp"
                alt="Logotipo Vila Pet Brasil Menu Lateral"
                width={120}
                height={80}
                style={{ height: '80px', width: 'auto' }}
              />
              <button
                onClick={() => setMenuOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <Image src="/assets/botaoativo.svg" alt="Fechar Menu" width={25} height={25} />
              </button>
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              {navItems.map(([label, id]) => (
                <li key={id} style={{ marginTop: '32px' }}>
                  <button
                    onClick={() => scrollTo(id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '18px',
                      lineHeight: '27px',
                      color: '#3E3089',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                    }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
