import React from 'react';
import './Beneficios.css';

const Beneficios = () => {
  return (
    <section className="beneficios-section">
      <div className="beneficios-header">
        <h2>Por que escolher a Mell?</h2>
        <p>Conexão, entretenimento e atendimento em um só lugar.</p>
      </div>

      <div className="beneficios-grid">
        
        {/* Card 1 */}
        <div className="beneficio-card">
          <div className="icon-container">
            {/* Ícone de Relógio */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h3>Suporte disponível a qualquer hora</h3>
          <p>Conte com o suporte da Mell quando precisar de atendimento.</p>
        </div>

        {/* Card 2 */}
        <div className="beneficio-card">
          <div className="icon-container">
            {/* Ícone de Coração */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <h3>Atendimento que conhece sua região</h3>
          <p>Uma equipe próxima, que entende as necessidades da sua região.</p>
        </div>

        {/* Card 3 */}
        <div className="beneficio-card">
          <div className="icon-container">
            {/* Ícone de Alvo/Localização */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="3"></circle>
              <line x1="12" y1="1" x2="12" y2="4"></line>
              <line x1="12" y1="20" x2="12" y2="23"></line>
              <line x1="1" y1="12" x2="4" y2="12"></line>
              <line x1="20" y1="12" x2="23" y2="12"></line>
            </svg>
          </div>
          <h3>+50 cidades atendidas</h3>
          <p>A Mell leva conexão e atendimento a mais de 50 cidades.</p>
        </div>

      </div>
    </section>
  );
};

export default Beneficios;