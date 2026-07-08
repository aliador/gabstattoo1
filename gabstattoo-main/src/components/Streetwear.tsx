import { useState } from 'react';
import { motion } from 'motion/react';
import './Streetwear.css';

// Import our custom streetwear collab image
import streetwearCollab from '../assets/images/streetwear_collab_1781658234825.jpg';
import tattooFlashes from '../assets/images/tattoo_flashes_1781658248928.jpg';
import napele from '../assets/images/napele.png';

export default function Streetwear() {
  const [activeTab, setActiveTab] = useState<'lookbook' | 'items'>('lookbook');
  const [systemAlert, setSystemAlert] = useState(false);

  const triggerMockAlert = () => {
    setSystemAlert(true);
    setTimeout(() => setSystemAlert(false), 2400);
  };

  return (
    <section className="streetwear-section hard-edges" id="streetwear">
      {/* Background large rotated brand watermark */}
      <div className="watermark-text font-display">MARCAR O PANO</div>

      {/* cinemascope horizontal crop of fabric texture */}
      <div className="cinemascope-wrapper brutalist-border">
        <div className="cinemascope-scanner"></div>
        <img 
          src={napele} 
          alt="Streetwear cyber tribal graphic printing detail" 
          className="cinemascope-img"
          referrerPolicy="no-referrer"
        />
        <div className="cinemascope-badge danger-tag font-display">KNIGHT SKULL COLLAB // RUN_001</div>
      </div>

      <div className="streetwear-content-grid">
        
        {/* Left Column: Polaroid Model Details or item toggle */}
        <div className="streetwear-left-col">
          <div className="polaroid-frame brutalist-border">
            <div className="polaroid-header">
              <span>IMG_LOG_404_RAW</span>
              <span className="dot-active">● ESTÁVEL</span>
            </div>
            <div className="polaroid-img-wrapper">
              <img 
                src={activeTab === 'lookbook' ? napele : tattooFlashes} 
                alt="Wearable art details" 
                className={activeTab === 'items' ? 'color-preserved-flash' : ''}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="polaroid-caption font-mono">
              <p className="caption-main">[PEÇA: HOODIE HEAVY TRIBAL_SHIELD]</p>
              <p className="caption-sub">ALGODÃO 450G // ESTAMPA RELEVO PRETO SÓLIDO // GRADE LIMITADA</p>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative + Call to Action in industrial error block */}
        <div className="streetwear-right-col">
          
          <div className="tab-triggers font-display">
            <button 
              onClick={() => setActiveTab('lookbook')} 
              className={`tab-btn hard-edges ${activeTab === 'lookbook' ? 'active' : ''}`}
            >
              LOOKBOOK_V.01
            </button>
            <button 
              onClick={() => setActiveTab('items')} 
              className={`tab-btn hard-edges ${activeTab === 'items' ? 'active' : ''}`}
            >
              SPECS_PEÇA
            </button>
          </div>

          <div className="streetwear-manifesto-block font-mono">
            <h3>MARCAR O PANO.</h3>
            <h3>EXP_009_COLLAB</h3>
            <div className="manifesto-paragraph-box">
              <p>
                A transferência do stencil autoral para a fibra do tecido. Uma coleção cápsula desenvolvida de forma conjunta com a marca de streetwear de guerrilha paulistana. Edição numerada com selo Knight Skull costurado individualmente no punho direito.
              </p>
            </div>
          </div>

          {/* Interactive alert block or trigger shop button */}
          <div className="interactive-purchase-wrapper">
            <button 
              onClick={triggerMockAlert} 
              className="system-action-btn hard-edges font-display"
            >
              [ VER COLEÇÃO COMPLETA ]
            </button>

            {systemAlert && (
              <motion.div 
                className="mock-system-alert font-mono"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
              >
                <span className="alert-red-header">⚠ SISTEMA // ACESSO ADIADO:</span>
                <p className="text-white">Lote esgotado em 3 minutos. Aguarde o ciclo de relançamento PROTOCOLO_CYBER_V.02_REGISTRAR na lista de contatos para acesso antecipado.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
