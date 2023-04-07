import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ ring }) => {
    return (
        <div className='border'>
            <h2>Aunty Component</h2>
            <div className='flex'>
                <Cousin ring={ring}>Khairul</Cousin>
                <Cousin>Kabir</Cousin>
            </div>
        </div>
    );
};

export default Aunty;