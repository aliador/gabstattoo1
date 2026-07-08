import { useState } from 'react';
import { motion } from 'motion/react';
import './Tribal.css';

// Import our custom cyber tribal neck tattoo asset
import cyberTribalTattoo from '../assets/images/cyber_tribal_tattoo_1781658223465.jpg';
import desenho3 from '../assets/images/desenho3.jpg';

export default function Tribal() {
  const [zoomLevel, setZoomLevel] = useState(1.1);
  const [isGlitched, setIsGlitched] = useState(false);

  const toggleGlitch = () => {
    setIsGlitched(true);
    setTimeout(() => setIsGlitched(false), 350);
  };

  return (
    <section className="tribal-section hard-edges" id="tribal">
      <div className="bg-grid-lines"></div>

      {/* Extreme low-opacity huge background text */}
      <div className="huge-bg-text font-display">CYBER</div>

      {/* Cyber Tribal SVG Wireframe Overlay (represented in detailed SVG) */}
      <div className="tribal-vector-overlay">
        <svg viewBox="0 0 800 800" width="100%" height="100%" fill="none" opacity="0.15">
          <path 
            d="M 400,100 L 400,700 M 100,400 L 700,400 M 200,200 L 600,600 M 200,600 L 600,200" 
            stroke="var(--white)" 
            strokeWidth="1" 
            strokeDasharray="4,4"
          />
          <circle cx="400" cy="400" r="300" stroke="var(--white)" strokeWidth="1.5" strokeDasharray="10,5" />
          <circle cx="400" cy="400" r="100" stroke="var(--red)" strokeWidth="2" />
          {/* Cyber-tribal barbs / blades rendered using pure paths */}
          <path 
            d="M 400,200 C 370,300 300,370 400,400 C 500,370 430,300 400,200 Z" 
            fill="var(--white)" 
            opacity="0.8"
          />
          <path 
            d="M 400,600 C 370,500 300,430 400,400 C 500,430 430,500 400,600 Z" 
            fill="var(--white)" 
            opacity="0.8"
          />
          <path 
            d="M 200,400 C 300,370 370,300 400,400 C 370,500 300,430 200,400 Z" 
            fill="var(--white)" 
            opacity="0.4"
          />
          <path 
            d="M 600,400 C 500,370 430,300 400,400 C 430,500 500,430 600,400 Z" 
            fill="var(--white)" 
            opacity="0.4"
          />
        </svg>
      </div>

      <div className="tribal-content">
        
        {/* Left Column: Scope Magnifier representing the Neck Tattoo */}
        <div className="magnifier-column">
          <div className="scope-container">
            {/* Scope crosshairs indicators */}
            <div className="scope-crosshair scope-top-left"></div>
            <div className="scope-crosshair scope-top-right"></div>
            <div className="scope-crosshair scope-bottom-left"></div>
            <div className="scope-crosshair scope-bottom-right"></div>
            
            <div className="scope-angle-info font-mono">SYS_COORDS / X:409_Y:881</div>

            <motion.div 
              className={`scope-lupa brutalist-border ${isGlitched ? 'glitch-heavy' : ''}`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 180 }}
            >
              <img 
                src={desenho3} 
                alt="Cyber tribal tattoo detail" 
                referrerPolicy="no-referrer"
                style={{ transform: `scale(${zoomLevel})` }}
              />
              <div className="scope-lens-overlay"></div>
            </motion.div>

            {/* Micro zoom controls disguised as tactical hardware knobs */}
            <div className="lupa-controls font-mono">
              <span className="ctrl-title">MAGNITUDE</span>
              <button 
                onClick={() => setZoomLevel(prev => Math.max(1, prev - 0.15))}
                className="btn-knob"
              >
                [-]
              </button>
              <span className="current-zoom">{zoomLevel.toFixed(2)}x</span>
              <button 
                onClick={() => setZoomLevel(prev => Math.min(2, prev + 0.15))}
                className="btn-knob"
              >
                [+]
              </button>
              <button onClick={toggleGlitch} className="btn-glitch-shot">
                [PULSAR]
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Style Manifesto, Specifications, tech stamps */}
        <div className="tribal-info-column">
          <div className="sticker-tag font-display mb-15">TRIBAL_SYSTM / SECURE_ARCHIVE</div>
          
          <h2 className="section-subtitle font-display">
            A MECANICIDADE<br />
            DA LINHA TRADICIONAL
          </h2>

          <div className="tribal-specs brutalist-border">
            <div className="spec-row font-mono">
              <span className="spec-label">PROJETO:</span>
              <span className="spec-val">THORN_SYMBIOSIS_01</span>
            </div>
            <div className="spec-row font-mono">
              <span className="spec-label">DIRETIVO:</span>
              <span className="spec-val">FLUIDEZ ORGÂNICA</span>
            </div>
            <div className="spec-row font-mono">
              <span className="spec-label">ESTILO:</span>
              <span className="spec-val">BLACKWORK TRIBAL</span>
            </div>
            <div className="spec-row font-mono">
              <span className="spec-label">LOCALIZAÇÃO:</span>
              <span className="spec-val">FLANCO DIREITO / COSTELA</span>
            </div>
            <div className="spec-row font-mono">
              <span className="spec-label">TÉCNICA:</span>
              <span className="spec-val">LINHAS EXPANSIVAS</span>
            </div>
          </div>

          <p className="tribal-description font-mono">
            O Cyber Tribal não é ornamento; é uma couraça. Desenhado de forma assimétrica para se fundir de forma definitiva com as linhas, criando contraste radical com o tom da pele.
          </p>

          <div className="warning-stamps">
            <span className="danger-tag font-mono">⚠ PERIGO: PRETO FRESCO</span>
            <span className="sticker-style-wire font-mono">[COD_CYBER]</span>
          </div>
        </div>
      </div>

      {/* Cyber Tribal linear ticker at the bottom */}
      <div className="ticker-wrap ticker-wrap-red hard-edges rotate-ticker">
        <div className="ticker-content">
          <span>CYBER_TRIBAL - BLACKWORK - DARKNESS _ CYBER_TRIBAL - BLACKWORK - DARKNESS _ CYBER_TRIBAL - BLACKWORK - DARKNESS _ CYBER_TRIBAL - BLACKWORK - DARKNESS _ </span>
          <span>CYBER_TRIBAL - BLACKWORK - DARKNESS _ CYBER_TRIBAL - BLACKWORK - DARKNESS _ CYBER_TRIBAL - BLACKWORK - DARKNESS _ CYBER_TRIBAL - BLACKWORK - DARKNESS _ </span>
        </div>
      </div>
    </section>
  );
}
