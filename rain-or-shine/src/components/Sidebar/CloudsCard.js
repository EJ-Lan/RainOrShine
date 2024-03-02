import React from 'react';
import './styles/CloudCard.scss';
import cloudIcon from '../../assets/icons/cloud.png';

const CloudCard = () => {
    return (
      <div className="cloud-card">
        <img src={cloudIcon} alt="Cloud Coverage" />
        <div>
          <h3>Cloud Coverage</h3>
          <p>50%</p> 
        </div>
      </div>
    );
  };
  
  export default CloudCard;