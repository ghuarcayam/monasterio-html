import React from 'react';
import './App.css';
import { Steps } from 'primereact/steps';

function ContentHTML() {

  const items = [
    {
        label: 'Personal'
    },
    {
        label: 'Seat'
    },
    {
        label: 'Payment'
    },
    {
        label: 'Confirmation'
    }
];

  return (
    <>
        <div className="card">
            <Steps model={items} />
        </div>

    </>  
    );
}

export default ContentHTML;
