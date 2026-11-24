import React from 'react';
import './Planos.css';

// IMPORTANDO AS DUAS IMAGENS DA PASTA ASSETS
import muhlerImg from '../../assets/muhler.webp'; 
import homemGriando from '../../assets/homem.webp'; 

const Planos = () => {
  return (
    /* ID ADICIONADO AQUI PARA O LINK DA NAVBAR FUNCIONAR */
    <section id="promocoes" className="planos-section">
      <div className="planos-header">
        <span className="planos-badge">● ESCOLHA SEU PLANO</span>
        <h2>As ofertas que fazem a diferença</h2>
        <p>Duas opções para você aproveitar a Black Friday Mell.</p>
      </div>

      <div className="planos-grid">
        
        {/* CARD 1: 600 MEGA */}
        <div className="card-plano">
          <div className="card-image">
             <img src={muhlerImg} alt="Mulher ouvindo música" />
          </div>
          
          <div className="card-content">
            <span className="card-tag">OFERTA PARA ECONOMIZAR</span>
            <h3 className="card-title">600 MEGA</h3>
            <p className="card-desc">Internet fibra óptica para o seu dia a dia, com um benefício especial na contratação.</p>
            
            <div className="card-price">
              <span className="price-currency">R$</span>
              <span className="price-value">79,90</span>
              <span className="price-period">/mês</span>
            </div>
            
            <p className="price-highlight"><span className="orange-square"></span> Primeira mensalidade grátis</p>
            
            <ul className="card-features">
              <li>600 Mega de internet fibra óptica</li>
              <li>Primeira mensalidade grátis</li>
              <li>Atendimento da equipe Mell</li>
            </ul>
            
            <a 
              href="https://wa.me/558000389004?text=Ol%C3%A1!%20Gostaria%20de%20contratar%20o%20plano%20de%20600%20Mega." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-card"
            >
              Quero 600 Mega ↗
            </a>
          </div>
        </div>

        {/* CARD 2: 1000 MEGA + CANAIS */}
        <div className="card-plano destaque">
          <div className="card-image">
             <img src={homemGriando} alt="Homem comemorando" />
          </div>
          
          <div className="card-content">
            <span className="card-tag">★ MAIS VELOCIDADE + ENTRETENIMENTO</span>
            <h3 className="card-title">1.000 MEGA<br/>+ CANAIS</h3>
            <p className="card-desc">1.000 Mega de internet + Watch Power Esporte Clube com 74 canais.</p>
            
            <div className="card-price">
              <span className="price-currency">R$</span>
              <span className="price-value">89,90</span>
              <span className="price-period">/mês</span>
            </div>
            
            <p className="price-sub">Preço promocional durante 12 meses</p>
            
            <div className="channel-logos">
              <span className="logo-pill">PREMIERE</span>
              <span className="logo-pill espn">ESPN</span>
              <span className="logo-pill sportv">sportv</span>
            </div>
            
            <ul className="card-features">
              <li>1.000 Mega de internet fibra óptica</li>
              <li>Pacote Watch Power Esporte Clube com 74 canais</li>
            </ul>
            
            <a 
              href="https://wa.me/558000389004?text=Ol%C3%A1!%20Gostaria%20de%20contratar%20o%20plano%20de%201.000%20Mega%20%2B%20Canais." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-card"
            >
              Quero 1.000 Mega + Canais ↗
            </a>
          </div>
        </div>

      </div>

      <p className="planos-disclaimer">
        * 1.000 Mega + canais: R$ 89,90/mês por 12 meses, mediante Pix automático ou cartão recorrente. Oferta sujeita a condições, disponibilidade e cobertura. Consulte o regulamento e as condições da oferta de 600 Mega com a equipe comercial antes da contratação.
      </p>
    </section>
  );
};

export default Planos;