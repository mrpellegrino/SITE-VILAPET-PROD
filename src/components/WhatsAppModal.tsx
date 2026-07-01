'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const WhatsAppModalContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const wa = searchParams.get('wa');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (wa) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [wa]);

  if (!isOpen) return null;

  const closeModal = () => {
    setIsOpen(false);
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.delete('wa');
    router.replace(newUrl.pathname + newUrl.search, { scroll: false });
  };

  const getMessage = (unit: string) => {
    const baseMessages: Record<string, string> = {
      contato:
        'Olá, Vila Pet Brasil. Vim pelo seu anúncio no Google e gostaria de mais informações.',
      banhos: 'Olá Vila Pet! Gostaria de saber mais sobre os banhos!',
      tosas: 'Olá Vila Pet! Gostaria de saber mais sobre as tosas!',
      agendar: 'Olá Vila Pet! Gostaria de agendar um horário.',
      promo: 'Olá, Vila Pet Brasil. Gostaria de aproveitar a promoção!',
    };
    const msg = baseMessages[wa || 'contato'] || baseMessages.contato;
    return encodeURIComponent(`${msg} (Unidade: ${unit})`);
  };

  const handleSelectUnit = (unit: string) => {
    let phone = '5531975166552'; // Espírito Santo (default)
    if (unit === 'Jardim da Cidade') {
      phone = '553135318518'; // Jardim da Cidade
    }
    const message = getMessage(unit);
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
    closeModal();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          padding: '30px',
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          position: 'relative',
        }}
      >
        <button
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'transparent',
            border: 'none',
            fontSize: '28px',
            lineHeight: '1',
            cursor: 'pointer',
            color: '#999',
          }}
        >
          &times;
        </button>

        <h2
          style={{
            fontFamily: 'PoppinsStrong, sans-serif',
            fontSize: '22px',
            color: '#333',
            marginBottom: '10px',
            textAlign: 'center',
            fontWeight: 700,
          }}
        >
          Escolha a Unidade
        </h2>
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            color: '#666',
            marginBottom: '25px',
            textAlign: 'center',
          }}
        >
          Para qual unidade do Vila Pet Brasil você deseja enviar mensagem?
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button
            onClick={() => handleSelectUnit('Espírito Santo')}
            style={{
              padding: '15px',
              backgroundColor: '#EA528B',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'opacity 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            📍 Unidade Espírito Santo
          </button>

          <button
            onClick={() => handleSelectUnit('Jardim da Cidade')}
            style={{
              padding: '15px',
              backgroundColor: '#3E3089',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'opacity 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            📍 Unidade Jardim da Cidade
          </button>
        </div>
      </div>
    </div>
  );
};

const WhatsAppModal = () => (
  <Suspense fallback={null}>
    <WhatsAppModalContent />
  </Suspense>
);

export default WhatsAppModal;
