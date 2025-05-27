import React, { useState } from 'react';
import './AnatomyCard.css';
import AnatomyDetailsModal from '../AnatomyDetailsModal/AnatomyDetailsModal';

const AnatomyCard = ({ title, image, details }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="anatomy-card">
      <div className="anatomy-image">
        <img src={image} alt={title} />
      </div>
      <div className="anatomy-content">
        <h3>{title}</h3>
        <a href="#" onClick={handleDetailsClick} className="details-link">
          View Details
        </a>
      </div>
      <AnatomyDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        details={details}
      />
    </div>
  );
};

export default AnatomyCard; 