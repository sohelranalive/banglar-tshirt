import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const RingContext = createContext(null);

export const MoneyContext = createContext(null);

const Grandpa = () => {


    const [money, setMoney] = useState(0);

    const ring = 'Diamond Ring'

    return (
        <div className='border'>
            <h2>Grandpa Component</h2>
            <p>Has Money: {money}</p>
            <div className='flex'>
                <MoneyContext.Provider value={[money, setMoney]}>
                    <RingContext.Provider value='Golden Ring'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </RingContext.Provider>
                </MoneyContext.Provider>
            </div>
        </div>
    );
};

export default Grandpa;