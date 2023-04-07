import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const [money, setMoney] = useContext(MoneyContext);

    const receiveValue = useContext(RingContext);

    return (
        <div className='border'>
            <h2>Brother Component</h2>
            <small>{receiveValue}</small>
            <p>Money: {money}</p>
        </div>
    );
};

export default Brother;