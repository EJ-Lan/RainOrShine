import React from 'react';
import './styles/CloudCard.scss';
import cloudIcon from '../../assets/icons/cloud.png'; 

const CloudCard = ({ cloudiness }) => {
    return (
        <div className="cloud-card">
            <img src={cloudIcon} alt="Cloud Coverage" />
            <div>
                <h3>Cloud Coverage</h3>
                <p>{cloudiness ?? 'N/A'}%</p> 
            </div>
        </div>
    );
};

export default CloudCard;