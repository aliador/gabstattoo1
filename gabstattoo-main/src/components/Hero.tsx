import { motion } from 'motion/react';
import './Hero.css';

// Using the requested initial artwork as the hero background
import initialImage from '../assets/images/inicialv2.png';

export default function Hero() {
  return (
    <section className="hero-block" id="hero">
      <div className="hero-container">
        <div className="hero-canvas">
          <div className="hero-canvas-wrapper">
            <img id="baseImage" src={initialImage} alt="Crimson Hero Base" className="hero-base" />
            <div className="glow-layer">
              <div className="glow-hotspot glow-hotspot-1"></div>
              <div className="glow-hotspot glow-hotspot-2"></div>
              <div className="glow-hotspot glow-hotspot-3"></div>
            </div>
            <div className="effects-layer">
              <div className="cross cross-1"></div>
              <div className="cross cross-2"></div>
              <div className="cross cross-3"></div>
              <div className="sun-pulse"></div>
            </div>
            <div className="vignette"></div>
            <div className="noise"></div>
          </div>
        </div>

        <div className="content-slot">
          {/* Rotating vertical sidebar text */}
          <div className="vertical-label-container">
            <span className="vertical-label">[PROTOCOLO_CYBER_V.01]</span>
            <span className="vertical-label-right">[SP_BR_2026]</span>
          </div>

          {/* Main typographic overload layout */}
          <div className="hero-title-group">
            <motion.div 
              className="glitch-text-wrapper"
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="hero-title font-display">
                GABS<br/>
                TATT<br/>
                <span className="text-stroke">OO</span>
                <span className="red-accent">_</span>
              </h1>
            </motion.div>
          </div>

          {/* Overlapping stencil sticker */}
          <motion.div 
            className="floating-sticker-tag"
            initial={{ y: 50, rotate: 25, opacity: 0 }}
            animate={{ y: 0, rotate: 12, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
          >
            <span className="danger-tag font-display">CYBER_TRIBAL</span>
          </motion.div>

          {/* Bottom status barcode and details */}
          <div className="hero-bottom-bar">
            <div className="barcode-box">
              <div className="barcode-lines"></div>
              <p className="barcode-text">GABS TATTOO // BLACKWORK & TRIBAL</p>
            </div>
            <div className="scroll-indicator font-display">
              <span>SUA_PELE_MERECE_ESCURIDÃO_AUTÊNTICA</span>
              <span className="blink-arrow">↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
