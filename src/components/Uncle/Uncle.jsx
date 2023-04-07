import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div className='border'>
            <h2>Uncle Component</h2>
            <div className='flex'>
                <Cousin>Mithun</Cousin>
                <Cousin>Rimon</Cousin>
            </div>
        </div>
    );
};

export default Uncle;  