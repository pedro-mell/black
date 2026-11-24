import React from 'react';
import './Faq.css';

const Faq = () => {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Dúvidas frequentes</h2>

        <div className="faq-list">
          
          {/* Pergunta 1 */}
          <details className="faq-item">
            <summary className="faq-question">
              A promoção está disponível na minha cidade?
            </summary>
            <div className="faq-answer">
              <p>A disponibilidade depende da cobertura da Mell no seu endereço. Consulte a equipe comercial pelo WhatsApp.</p>
            </div>
          </details>

          {/* Pergunta 2 */}
          <details className="faq-item">
            <summary className="faq-question">
              Como funciona o pagamento da oferta de 1.000 Mega?
            </summary>
            <div className="faq-answer">
              <p>O valor promocional de R$ 89,90/mês é válido por 12 meses mediante pagamento via Pix automático ou cartão de crédito recorrente.</p>
            </div>
          </details>

          {/* Pergunta 3 */}
          <details className="faq-item">
            <summary className="faq-question">
              Como posso contratar?
            </summary>
            <div className="faq-answer">
              <p>Basta clicar no botão "Falar no WhatsApp da Mell" na seção acima. Nossa equipe vai te ajudar com todo o processo de contratação e agendamento da instalação.</p>
            </div>
          </details>

        </div>
      </div>
    </section>
  );
};

export default Faq;