import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {

    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div className='border'>
            <h2>Sister Component</h2>
            <p>Calculate Money: {money}</p>
            <button onClick={() => setMoney(money + 100)}>Add 100 Taka</button>
        </div>
    );
};

export default Sister;