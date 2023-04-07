import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {

    const tshirts = useLoaderData();

    const [cart, setCart] = useState([])

    const handleAddToCart = (tshirts) => {
        console.log(tshirts);
    }

    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Home;