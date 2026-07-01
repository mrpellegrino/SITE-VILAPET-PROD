'use client';

import React, { useState } from 'react';

const MapTabs = () => {
  const [activeTab, setActiveTab] = useState<'espirito-santo' | 'jardim-cidade'>('espirito-santo');

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        marginBottom: '40px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '20px',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={() => setActiveTab('espirito-santo')}
          style={{
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            background: activeTab === 'espirito-santo' ? '#EA528B' : '#f0f0f0',
            color: activeTab === 'espirito-santo' ? '#fff' : '#333',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          Unidade Espírito Santo
        </button>
        <button
          onClick={() => setActiveTab('jardim-cidade')}
          style={{
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            background: activeTab === 'jardim-cidade' ? '#EA528B' : '#f0f0f0',
            color: activeTab === 'jardim-cidade' ? '#fff' : '#333',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          Unidade Jardim da Cidade
        </button>
      </div>

      <div
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        {activeTab === 'espirito-santo' ? (
          <iframe
            title="Localização Vila Pet Brasil - Espírito Santo"
            style={{ border: 0, width: '100%', height: '450px', display: 'block' }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDk89J4FSunMF33ruMVWJaJht_Ro0kvoXs&q=Rua+Osvaldo+Rodrigues+Pereira+540+Bairro+Espirito+Santo+Betim+MG"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <iframe
            title="Localização Vila Pet Brasil - Jardim da Cidade"
            style={{ border: 0, width: '100%', height: '450px', display: 'block' }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDk89J4FSunMF33ruMVWJaJht_Ro0kvoXs&q=Av.+Edmeia+Matos+Lazzarotti+2418+Jardim+da+Cidade+Betim+MG"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export default MapTabs;
