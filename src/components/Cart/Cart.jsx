import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <h4>Please add some products</h4>
    }
    else {
        message = <h4>Thanks for shopping with us</h4>
    }
    return (
        <div>
            <h3 className={cart.length >= 2 ? 'orange' : 'blue'}>Order Summary: {cart.length}</h3>
            {
                cart.length > 2
                    ? "Add More than 3 products to get discount !"
                    : "Add at least 3 product for free delivery"
            }
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}> X</button>
                </p>)
            }
            {message}
            {
                cart.length === 5 && <h4>Congratulation ! You will get huge discount !</h4>
            }
            {
                cart.length == 3 || <h3>3 ta wala Condition</h3>
            }
        </div>
    );
};

export default Cart;