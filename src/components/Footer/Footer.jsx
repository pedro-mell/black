import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        
        {/* Lado Esquerdo */}
        <div className="footer-left">
          <p>© 2026 Mell Internet · A Internet sempre feliz.</p>
        </div>

        {/* Centro */}
        <div className="footer-center">
          <p>
            Atendimento: <a href="tel:08000389004" className="footer-link">0800 038 9004</a> · <a href="https://mellinternet.com.br" target="_blank" rel="noopener noreferrer" className="footer-link">mellinternet.com.br</a>
          </p>
        </div>

        {/* Lado Direito */}
        <div className="footer-right">
          <p>Ofertas de 20 a 30 de novembro de 2026</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;