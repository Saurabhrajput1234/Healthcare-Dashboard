import React from 'react';
import './HealthStatusCards.css';
import { healthData } from '../../data/healthData';

const HealthStatusCards = () => {
  return (
    <div className="section">
      <h2 className="title">Health Status</h2>
      <div className="cards-grid">
        {healthData.statusCards.map(card => (
          <div key={card.id} className="card health-status-card">
            <div className="card-header">
              <div className="icon" style={{ fontSize: '2.1rem', background: 'none', color: 'inherit' }}>{card.icon}</div>
              <h3>{card.title}</h3>
            </div>
            <div className="health-date">Date: {card.date}</div>
            <div className="flat-progress-bar-bg">
              <div className="flat-progress-bar" style={{ width: `${card.value}%`, background: card.color }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthStatusCards; 