import React from 'react';
import logoMell from '../../assets/mell_logo.png'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-content">
        
        {/* Lado Esquerdo: Logo + Slogan */}
        <div className="navbar-left">
          
          <img 
            src={logoMell} 
            alt="Logo Mell" 
            className="logo-image" 
          />

          {/* Divisor Vertical Laranja */}
          <div className="vertical-divider"></div>

          {/* Slogan */}
          <div className="slogan">
            <span className="slogan-top">A Internet</span>
            <span className="slogan-bottom">sempre feliz.</span>
          </div>
        </div>

        {/* Lado Direito: Botão */}
        <div className="navbar-right">
          {/* O href aponta para o ID que colocamos na section do Planos */}
          <a href="#promocoes" className="btn-promocoes">
            Ver promoções ↓
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;