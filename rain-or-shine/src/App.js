import React from 'react';
import Header from './components/Header/Header';
import SearchSection from "./components/SearchSection/SearchSection";
import SideBar from "./components/Sidebar/SideBar";
import WeatherSection from "./components/WeatherSection/WeatherSection";
import './App.scss';

const App = () => {
    return (
        <div className="app-grid">
            <Header />
            <SearchSection />
            <SideBar />
            <WeatherSection />
        </div>
    );
};

export default App;