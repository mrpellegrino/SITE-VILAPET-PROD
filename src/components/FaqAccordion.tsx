'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: 'Qual o melhor pet shop e banho e tosa em Betim?',
    answer:
      'A Vila Pet Brasil é a referência em Betim para banho e tosa de excelência. Contamos com um ambiente totalmente preparado e seguro, profissionais capacitados e utilizamos apenas produtos hipoalergênicos da mais alta qualidade, com duchas mineralizadoras e água ionizada.',
  },
  {
    question: 'Vocês oferecem serviço de Táxi Dog em Betim?',
    answer: (
      <>
        Sim! Sabemos que a sua rotina é corrida. Por isso, a Vila Pet Brasil
        oferece o serviço de <strong>Táxi Dog</strong> na região de Betim/MG
        para buscar e levar seu pet com total segurança e conforto para nossos
        serviços de estética animal.
      </>
    ),
  },
  {
    question: 'Vocês fazem banho para retirada de carrapatos e pulgas?',
    answer: (
      <>
        Não realizamos banhos antiparasitários. Por segurança dos demais animais
        atendidos, não aceitamos pets com infestação de carrapatos ou pulgas,
        pois o risco de contaminação cruzada é alto. Caso seja encontrado{' '}
        <strong>algum parasita isolado</strong> durante o atendimento, a família
        é avisada imediatamente. Se houver <strong>infestação</strong>, o pet é
        devolvido para que o tutor providencie o tratamento antiparasitário
        adequado antes de retornar.
      </>
    ),
  },
  {
    question: 'Com quantos dias o filhote pode tomar banho no pet shop?',
    answer: (
      <>
        O filhote pode ser atendido{' '}
        <strong>
          21 dias após a última dose do protocolo inicial de vacinas
        </strong>
        . Em geral, os filhotes tomam 3 doses de vacina, então o banho só é
        liberado 21 dias depois da terceira dose. Esse prazo existe para
        garantir a segurança do seu pet, já que o sistema imunológico precisa
        estar completamente protegido antes do contato com o ambiente do pet
        shop.
      </>
    ),
  },
  {
    question: 'A Vila Pet Brasil atende gatos e coelhos?',
    answer: (
      <>
        Sim. O nosso atendimento não se limita apenas aos cães. Oferecemos o{' '}
        <strong>Feline Basic</strong> (Banho e Tosa Higiênica completos para
        gatos) e banho especializado para <strong>coelhos</strong>, sempre de
        maneira segura e adaptada para diminuir o estresse do animal.
      </>
    ),
  },
];

export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section
      id="duvidas-frequentes"
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#fdf5ee',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          color: '#EA528B',
          fontSize: '2rem',
          marginBottom: '2rem',
          fontWeight: 'bold',
          fontFamily: 'PoppinsStrong, sans-serif',
        }}
      >
        Dúvidas Frequentes
      </h2>
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        {faqItems.map((item, index) => (
          <div
            key={index}
            style={{
              padding: '1.5rem',
              borderRadius: '12px',
              background: '#fff',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              cursor: 'pointer',
            }}
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h3
                style={{
                  color: '#EA528B',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  fontFamily: 'PoppinsStrong, sans-serif',
                  marginTop: 0,
                  flex: 1,
                  paddingRight: '16px',
                }}
              >
                {item.question}
              </h3>
              <span
                style={{
                  color: '#EA528B',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  flexShrink: 0,
                }}
              >
                {openFaq === index ? '−' : '+'}
              </span>
            </div>
            {openFaq === index && (
              <p
                style={{
                  color: '#555',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                  marginTop: '0.8rem',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
      <p
        style={{
          marginTop: '2rem',
          color: '#777',
          fontSize: '0.9rem',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        Conteúdo validado pela equipe técnica especializada da Vila Pet Brasil -
        Atualizado em Março/2026.
      </p>
    </section>
  );
}
