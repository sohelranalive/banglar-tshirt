import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ ring }) => {
    return (
        <div className='border'>
            <h2>MySelf Component</h2>
            <Special ring={ring}></Special>
        </div>
    );
};

export default MySelf;