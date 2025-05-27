import React from 'react';
import './AnatomyDetailsModal.css';

const AnatomyDetailsModal = ({ isOpen, onClose, details }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Anatomy Details</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <div className="detail-section">
            <h3>Overview</h3>
            <p>{details?.overview || 'Detailed information about the anatomy section.'}</p>
          </div>
          <div className="detail-section">
            <h3>Key Points</h3>
            <ul>
              {details?.keyPoints?.map((point, index) => (
                <li key={index}>{point}</li>
              )) || [
                'Important anatomical structures',
                'Common conditions',
                'Treatment approaches',
                'Preventive measures'
              ].map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="detail-section">
            <h3>Additional Information</h3>
            <p>{details?.additionalInfo || 'More detailed information about the anatomy section.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomyDetailsModal; 