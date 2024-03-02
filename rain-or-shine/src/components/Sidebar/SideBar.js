import React from 'react';
import CloudCard from './CloudsCard';
import SunriseSunsetCard from './SunriseSunsetCard';
import './styles/Sidebar.scss';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <CloudCard />
            <SunriseSunsetCard />
        </aside>
    );
};

export default Sidebar;