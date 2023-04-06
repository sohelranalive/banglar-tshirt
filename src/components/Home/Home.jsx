import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const tshirts = useLoaderData();

    return (
        <div>
            <h1>This is my home content: {tshirts.length}</h1>
        </div>
    );
};

export default Home; <h1>This is my home content</h1>