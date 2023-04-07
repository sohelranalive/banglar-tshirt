import React from 'react';

const Cousin = ({ children, ring }) => {
    return (
        <div className='border'>
            <h2>Cousin Component</h2>
            <p>{children}</p>
            <spall>{ring}</spall>
        </div>
    );
};

export default Cousin;