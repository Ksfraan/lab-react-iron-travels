import React, { useState } from 'react';
import travelPlansData from '/src/assets/travel-plans.json';
import '/src/styles/TravelList.css';

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);
    return (
        <div>
            <ul>
                {travelPlans.map((plan) => (
                    <li key={plan.id} className='travel-plan-item'>
                        <img src={plan.image} alt={plan.destination} />
                        <div className='textPart'>
                            <h3>
                                {plan.destination} {`(${plan.days} Days)`}
                            </h3>
                            <p>{plan.description}</p>
                            <p>
                                <span className='bold-text'>Price:</span> $
                                {plan.totalCost}
                            </p>
                            {renderLabels(plan)}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function renderLabels(plan) {
    const labels = [];

    if (plan.totalCost <= 350) {
        labels.push(
            <span key='great-deal' className='label great-deal'>
                Great Deal
            </span>
        );
    }

    if (plan.totalCost >= 1500) {
        labels.push(
            <div key='premium-all-inclusive' className='label-container'>
                <span className='label premium'>Premium</span>
                {plan.allInclusive && (
                    <span className='label all-inclusive'> All Inclusive</span>
                )}
            </div>
        );
    }
    return labels;
}

export default TravelList;
