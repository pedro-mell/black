import React from 'react';
import './Cta.css';

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        
        {/* Badge Superior */}
        <span className="cta-badge">
          <span className="badge-dot"></span> BLACK FRIDAY MELL
        </span>

        {/* Título */}
        <h2 className="cta-title">
          Encontrou sua oferta?<br />
          Converse com a Mell.
        </h2>

        {/* Descrição */}
        <p className="cta-description">
          Escolha seu plano e consulte a disponibilidade para o seu endereço. Nossa equipe poderá orientar sobre os próximos passos.
        </p>

        {/* Botão Principal - Link atualizado com a mensagem */}
        <a 
          href="https://wa.me/558000389004?text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20as%20ofertas%20da%20Black%20Friday%20Mell." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-btn"
        >
          Falar no WhatsApp da Mell ↗
        </a>

        {/* Telefone */}
        <p className="cta-phone">
          WhatsApp institucional: 0800 038 9004
        </p>

      </div>
    </section>
  );
};

export default Cta;