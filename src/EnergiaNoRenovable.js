// EnergiaNoRenovable.js
import React, { useState } from 'react';
import './EnergiaNoRenovable.css'; // Archivo CSS específico para esta página

function EnergiaNoRenovable() {
  const [showCard, setShowCard] = useState(false);

  const handleRegionClick = () => {
    setShowCard(true);
  };

  const closeCard = () => {
    setShowCard(false);
  };

  return (
    <div className="energia-no-renovable">
      <div className="map-container" onClick={handleRegionClick}>
        {/* Contenedor para la imagen de fondo y las regiones */}
        <div className="interactive-region"></div>
        {/* Más regiones si es necesario */}
      </div>

      {showCard && (
        <div className="info-card">
          <h2>Información de la Energía No Renovable</h2>
          {/* Contenido del card */}
          <button onClick={closeCard}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default EnergiaNoRenovable;
