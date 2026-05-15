'use client';

import React, { FormEvent, useState } from 'react';

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

export default function WorkWithUsSection() {
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setFeedback('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/trabalhe-conosco', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setFeedback(
          data?.message ?? 'Não foi possível enviar seu currículo agora. Tente novamente.'
        );
        return;
      }

      setStatus('success');
      setFeedback(data?.message ?? 'Currículo enviado com sucesso! Obrigado pelo seu interesse.');
      form.reset();
    } catch {
      setStatus('error');
      setFeedback('Erro ao enviar currículo. Tente novamente em alguns instantes.');
    }
  };

  return (
    <section id="trabalhe-conosco" className="careers-section">
      <div className="careers-content">
        <div>
          <h2
            style={{
              fontFamily: 'PoppinsStrong, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(28px, 4vw, 40px)',
              lineHeight: '1.3',
              color: '#3D3D3D',
              marginBottom: '12px',
            }}
          >
            Trabalhe Conosco
          </h2>
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '26px',
              color: '#555',
              maxWidth: '560px',
              marginBottom: '24px',
            }}
          >
            Quer fazer parte do time Vila Pet Brasil? Envie seu currículo e suas informações para
            avaliarmos oportunidades em aberto.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="careers-form" encType="multipart/form-data">
          <div className="careers-form-grid">
            <label className="careers-field">
              <span>Nome completo*</span>
              <input
                type="text"
                name="nome"
                required
                placeholder="Digite seu nome"
                maxLength={120}
              />
            </label>

            <label className="careers-field">
              <span>Telefone*</span>
              <input
                type="tel"
                name="telefone"
                required
                placeholder="(31) 99999-9999"
                maxLength={30}
              />
            </label>

            <label className="careers-field">
              <span>E-mail*</span>
              <input
                type="email"
                name="email"
                required
                placeholder="voce@email.com"
                maxLength={160}
              />
            </label>

            <label className="careers-field">
              <span>Área de interesse*</span>
              <input
                type="text"
                name="areaDeInteresse"
                required
                placeholder="Ex.: Banho e tosa"
                maxLength={100}
              />
            </label>
          </div>

          <label className="careers-field">
            <span>Currículo (PDF, DOC ou DOCX)*</span>
            <input
              type="file"
              name="curriculo"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              required
            />
          </label>

          <label className="careers-field">
            <span>Mensagem</span>
            <textarea
              name="mensagem"
              rows={4}
              placeholder="Conte um pouco sobre sua experiência"
              maxLength={1000}
            />
          </label>

          <button
            type="submit"
            className="vpb-button"
            disabled={status === 'loading'}
            style={{
              width: '100%',
              maxWidth: '320px',
              background: '#EA528B',
              marginTop: '8px',
              opacity: status === 'loading' ? 0.8 : 0.95,
            }}
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar currículo'}
          </button>
        </form>
        <p className="careers-helper-text">
          Se preferir, envie diretamente para{' '}
          <a href="mailto:contato@vilapetbrasil.com.br">contato@vilapetbrasil.com.br</a>.
        </p>
        {feedback && (
          <p
            style={{
              marginTop: '8px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
              color: status === 'success' ? '#1b8f42' : '#b42318',
            }}
          >
            {feedback}
          </p>
        )}
      </div>
    </section>
  );
}
