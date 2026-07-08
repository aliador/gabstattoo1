import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './ArchiveGallery.css'; // Reusing the same CSS

// Import portfolio images
import desenho1 from '../assets/images/desenho1.png';
import desenho2 from '../assets/images/desenho2.png';
import desenho3 from '../assets/images/desenho3.jpg';
import desenho4 from '../assets/images/desenho4.jpg';

const CAROUSEL_IMAGES = [
  { id: '1', src: desenho1, title: 'DESENHO_01' },
  { id: '2', src: desenho2, title: 'DESENHO_02' },
  { id: '3', src: desenho3, title: 'DESENHO_03' },
  { id: '4', src: desenho4, title: 'DESENHO_04' }
];

export default function SkinWorkGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const total = CAROUSEL_IMAGES.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className={`carousel-section ${isFullscreen ? 'carousel-fs-mode' : ''}`} id="skinwork-gallery">
      {isFullscreen && <div className="fs-backdrop" onClick={toggleFullscreen}></div>}
      
      <div className="carousel-container brutalist-border">
        {/* Header HUD inside the carousel space so it stays pinned */}
        <div className="carousel-header">
          <div className="ch-left">
            <h2 className="font-display ch-title">SKIN_WORK!!</h2>
            <p className="font-mono ch-subtitle" style={{ color: 'rgba(255, 255, 255, 0.6)'}}>Digital archive of tattoos on skin.</p>
          </div>
          <div className="ch-right font-mono text-red">
            <span className="counter-dot pulsating"></span>
            <span>{String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
          </div>
        </div>

        <div className="carousel-stage">
          {/* Custom Arrows overlayed on image */}
          <button className="stage-nav-btn prev-btn font-mono" onClick={handlePrev}>
            {'<'}
          </button>
          
          <div className="carousel-img-wrapper" onClick={toggleFullscreen}>
            <AnimatePresence initial={false} mode="wait">
              <motion.img
                key={currentIndex}
                src={CAROUSEL_IMAGES[currentIndex].src}
                alt={CAROUSEL_IMAGES[currentIndex].title}
                className="carousel-main-img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    handleNext();
                  } else if (swipe > swipeConfidenceThreshold) {
                    handlePrev();
                  }
                }}
              />
            </AnimatePresence>
            <div className="carousel-scanline"></div>
          </div>

          <button className="stage-nav-btn next-btn font-mono" onClick={handleNext}>
            {'>'}
          </button>
        </div>

        <div className="carousel-controls">
          <div className="empty-spacer"></div>
          <button className="c-fs-btn font-mono" onClick={toggleFullscreen} style={{ color: 'rgba(255, 255, 255, 0.6)'}}>
            {isFullscreen ? '[EXIT_FULL]' : '[ENTER_FULLSCREEN]'}
          </button>
        </div>
      </div>
    </section>
  );
}
