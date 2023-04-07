import React from 'react';
import './Tshirt.css'

const Tshirt = ({ tshirt, handleAddToCart }) => {

    const { picture, name, price } = tshirt;

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" className='' />
            <h3>{name}</h3>
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;