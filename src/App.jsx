import logo from './assets/logo.png';
import './App.css';
import travelPlansData from '/src/assets/travel-plans.json';
import { useState } from 'react';
import TravelList from './components/TravelList';

function App() {
    const [plans, setPlans] = useState(travelPlansData);
    return (
        <>
            <div>
                <img src={logo} className='logo' alt='App logo' />
            </div>
            <div className='title-wrapper'>
                <h1 className='text-iron'>Iron Travels</h1>
                <h3 className='text-iron'>
                    Tailored Travel Plans for Ironhackers
                </h3>
            </div>
            {/* RENDER YOUR LIST COMPONENT HERE */}
            <TravelList />/
        </>
    );
}

export default App;
