import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram } from 'lucide-react';
import './Footer.css';
import PanoramaScanner from './PanoramaScanner';

// Importing our high contrast Knight Skull central image
import knightSkullCenter from '../assets/images/knight_skull_stencil_1781658211478.jpg';

export default function Footer() {
  const [isInverted, setIsInverted] = useState(false);

  // Form states
  const [clientName, setClientName] = useState('');
  const [clientIdea, setClientIdea] = useState('');

  React.useEffect(() => {
    const openFormHandler = () => {
      setIsInverted(true);
    };
    window.addEventListener('open-booking-form', openFormHandler);
    return () => window.removeEventListener('open-booking-form', openFormHandler);
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const namePart = clientName ? `Olá, meu nome é ${clientName}. ` : `Olá! `;
    const ideaPart = clientIdea ? `\n\nMinha ideia é:\n\n${clientIdea}` : ``;
    const message = `${namePart}Tenho interesse em fazer uma tattoo.${ideaPart}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511977345834?text=${encodedMessage}`, '_blank');
  };

  return (
    <footer 
      className={`footer-section hard-edges ${isInverted ? 'color-inverted-mode' : ''}`}
      id="agendamento"
    >
      <div className="bg-grid-lines"></div>

      {/* Background watermark above the Instagram block */}
      <div className="closing-background-words font-display" aria-hidden="true">
        <span>PRETO_PURO</span>
      </div>

      <AnimatePresence mode="wait">
        {!isInverted ? (
          // Standard view
          <motion.div 
            className="footer-content-standard"
            key="standard-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Left social pillar */}
            <div className="vertical-social-left font-mono">
              <span className="social-tag font-display"></span>
              <a href="https://instagram.com/gab_.tatto" target="_blank" rel="noreferrer" className="social-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Instagram size={18} /> @GAB_.TATTO
              </a>
            </div>

            {/* Central panorama scanner component */}
            <div className="center-booking-card">
              <PanoramaScanner onBooking={() => setIsInverted(true)} />
            </div>

            {/* Right booking links pillar */}
            <div className="vertical-social-right font-mono">
              <span className="social-tag font-display">DIRECT_LOGS</span>
            </div>
          </motion.div>
        ) : (
          // Inverted / active interactive simple booking view
          <motion.div 
            className="footer-content-inverted"
            key="inverted-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', damping: 15 }}
          >
            <div className="inverted-header">
              <span className="inverse-stencil-tag font-display">[CONTATO_DIRETO]</span>
              <button 
                onClick={() => setIsInverted(false)} 
                className="btn-exit-inverse font-mono"
              >
                [FECHAR_FORMULÁRIO]
              </button>
            </div>

            <div className="booking-panel-simple">
              
              <div className="booking-simple-form brutalist-border">
                <form onSubmit={handleBookingSubmit} className="booking-raw-form font-mono">
                  <h3 className="form-sub-title font-display">PRETO_PURO</h3>
                  <p className="form-desc text-xs">Descreva sua ideia e entre em contato diretamente.</p>
                  
                  <div className="form-group">
                    <label className="input-heading">Nome</label>
                    <input 
                      type="text" 
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Digite seu nome"
                      className="raw-input brutalist-border"
                    />
                  </div>

                  <div className="form-group">
                    <label className="input-heading">Sua ideia</label>
                    <textarea 
                      rows={5}
                      value={clientIdea}
                      onChange={(e) => setClientIdea(e.target.value)}
                      placeholder="Conte sua ideia para a tattoo, referências, tamanho ou qualquer detalhe importante."
                      className="raw-textarea brutalist-border"
                    />
                  </div>

                  <button type="submit" className="btn-submit-booking font-display hard-edges">
                    ENVIAR PARA WHATSAPP
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
