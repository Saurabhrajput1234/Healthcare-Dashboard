import { Search, Heart, Activity } from 'lucide-react';
import muscleImg from '../../assets/muscle-body.png';
import './AnatomySection.css';
import { useState } from 'react';
import AnatomyDetailsModal from '../AnatomyDetailsModal/AnatomyDetailsModal';
import { healthData } from '../../data/healthData';

const AnatomySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="anatomy-card">
      <div className="anatomy-magnifier">
        <Search size={20} />
      </div>
      <div className="human-body-wrapper">
        <img src={muscleImg} alt="Human body illustration" className="human-body-img" />
        <div className="floating-label heart">
          <Heart size={18} style={{ color: '#fff' }} /> Healthy Heart
        </div>
        <div className="floating-label leg">
          <Activity size={18} style={{ color: '#fff' }} /> Healthy Leg
        </div>
      </div>
      <a href="#" className="anatomy-details-link" onClick={handleDetailsClick}>
        Details <span style={{ fontSize: '1.2em', display: 'inline-block', transform: 'translateY(1px)' }}>→</span>
      </a>
      <AnatomyDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        details={healthData.anatomy}
      />
    </section>
  );
};

export default AnatomySection; 