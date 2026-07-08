import React from 'react';
import finalPanorama from '../assets/images/final.jpg';

interface PanoramaScannerProps {
  onBooking: () => void;
}

export default function PanoramaScanner({ onBooking }: PanoramaScannerProps) {
  return (
    <div className="panorama-scanner-card">
      <div className="panorama-scanner-frame brutalist-border">
        <img
          src={finalPanorama}
          alt="Panoramic artwork"
          className="panorama-image"
          loading="eager"
        />
        <div className="scanner-overlay">
          <span className="scanner-line" />
        </div>
      </div>

      <button
        onClick={onBooking}
        className="big-booking-trigger font-display hard-edges panorama-booking-button"
      >
        [ _DESORÇAMENTO_ ]
      </button>
    </div>
  );
}
