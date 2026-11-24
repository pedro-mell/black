import React from 'react';

import familiaImg from '../../assets/familia_mell.webp'; 
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
    
      <div className="bg-shapes">
        <svg viewBox="0 0 1000 500" preserveAspectRatio="none">
          <path d="M0,300 C300,400 600,100 1000,200" stroke="#0055A4" strokeWidth="1.5" fill="none" opacity="0.4" />
          <path d="M0,350 C400,500 700,150 1000,300" stroke="#0055A4" strokeWidth="1" fill="none" opacity="0.2" />
        </svg>
      </div>

      <div className="hero-content">
        
        {/* Lado Esquerdo: Textos */}
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="title-white">BLACK</span>
            <span className="title-orange">FRIDAY</span>
            <span className="title-white">MELL</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Sua próxima conexão começa com uma<br /> 
            oferta imperdível.
          </h2>
          
          <p className="hero-description">
            Mais velocidade para navegar, trabalhar e se divertir. Escolha o plano ideal 
            e fale com a equipe Mell pelo WhatsApp.
          </p>
          
          <a href="#promocoes" className="hero-btn">
            Conhecer as ofertas ↓
          </a>
          
          <p className="hero-disclaimer">
            Preços e benefícios sujeitos às condições e à cobertura disponível.
          </p>
        </div>

        {/* Lado Direito: Imagem + Card de Preço */}
        <div className="hero-right">
          <div className="image-container">
            <img 
              src={familiaImg} 
              alt="Família assistindo TV" 
              className="hero-image"
            />
          </div>
          
          {/* Card Laranja de Preço */}
          <div className="price-card">
            <span className="price-label">PLANOS A PARTIR DE</span>
            <span className="price-value">R$ 79,90</span>
            <span className="price-period">/mês</span>
          </div>
          
          {/* ÍCONE DO WHATSAPP ATUALIZADO */}
          
        </div>

      </div>
    </section>
  );
};

export default Hero;