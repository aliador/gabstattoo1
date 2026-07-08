import { motion } from 'motion/react';
import './Blackwork.css';

// Importing generated assets
import tattooFlashesImage from '../assets/images/tattoo_flashes_1781658248928.jpg';
import cyberTribalTattooImage from '../assets/images/cyber_tribal_tattoo_1781658223465.jpg';
import desenho4_5 from '../assets/images/desenho4.5.png';

import { TattooProject } from '../types';

const PROJECTS: TattooProject[] = [
  {
    id: 'b1',
    title: 'CRÂNIO_ARMADO_04',
    style: 'Blackwork',
    image: tattooFlashesImage,
    size: '18 x 22 cm',
    placement: 'Antebraço Externo',
    description: 'Estudo autoral fundindo crânio medieval heraldista com pontas cyberntetizadas e sombreado rústico arrastado.',
    year: '2026'
  },
  {
    id: 'b2',
    title: 'pressione_a_foto!',
    style: 'Cyber Tribal',
    image: desenho4_5,
    size: '',
    placement: '',
    description: '[ORIGINAL_WALL_CONCEPT]',
    year: '2026'
  }
];

export default function Blackwork() {
  return (
    <section className="blackwork-section hard-edges" id="blackwork">
      {/* Background barbed wire lines / watermarks */}
      <div className="absolute-fundo-frase font-display">A_PELE_É_O_PERGAMINHO</div>
      
      {/* Barbed Wire SVG path traversing diagonally */}
      <div className="barbed-wire-diagonal">
        <svg viewBox="0 0 1200 150" width="100%" height="100%" preserveAspectRatio="none">
          <path 
            d="M0,75 L1200,75 M150,75 L160,65 L170,85 L155,80 L165,70 M450,75 L460,65 L470,85 L455,80 L465,70 M750,75 L760,65 L770,85 L755,80 L765,70 M1050,75 L1060,65 L1070,85 L1055,80 L1065,70" 
            stroke="var(--white)" 
            strokeWidth="3.5" 
            fill="none" 
            strokeLinecap="square"
          />
        </svg>
      </div>

      <div className="blackwork-grid">
        
        {/* Left column: Raw Technical logs & Smaller image */}
        <div className="col-left">
          <div className="brutalist-block-info border-red font-mono">
            <span className="danger-tag">ESTÉTICA DO ERRO</span>
            <p className="margin-top-10 text-xs">
              Mecanização do traço e a crueza do preto saturado. Dispensamos a suavidade, abraçamos o choque mecânico da agulha.
            </p>
            <div className="divider-dashed"></div>
            <div className="project-stats-ticker">
              <span className="pulsing-record">● CARNE WORK LOG</span>
              <span className="text-gray-500">SPEED: 9.8V</span>
            </div>
          </div>
        </div>

        {/* Center/Right column: Overlapping massive tilted tattoo image */}
        <div className="col-right">
          <motion.div 
            className="tattoo-frame-large brutalist-border"
            initial={{ rotate: 1 }}
            whileInView={{ rotate: -3.5 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.01, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <div className="frame-header-tag text-bg-red">[ORIGINAL_WALL_CONCEPT]</div>
            <img 
              src={PROJECTS[1].image} 
              alt={PROJECTS[1].title}
              referrerPolicy="no-referrer"
              className="tattoo-image-heavy"
            />
            <div className="frame-footer bg-black-footer">
              <div>
                <h3 className="font-display text-base text-red-accent">{PROJECTS[1].title}</h3>
                <p className="desc font-mono text-xs">{PROJECTS[1].description}</p>
              </div>
              <div className="vertical-year font-display">{PROJECTS[1].year}</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Massive vertical display title */}
      <div className="vertical-main-title font-display text-stroke">
        BLACKWORK
      </div>

      {/* Manifesto linear ticker at the bottom */}
      <div className="ticker-wrap ticker-wrap-red hard-edges rotate-ticker">
        <div className="ticker-content">
          <span>O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ </span>
          <span>O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ O PRETO É A COR MAIS QUENTE _ </span>
        </div>
      </div>
    </section>
  );
}
