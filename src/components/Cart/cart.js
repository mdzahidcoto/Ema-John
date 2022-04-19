import React from 'react';
import './cart.css';

const Cart = (props) => {
    return (
        <div>
            <h3>Cart containers</h3>
            <h4>Item Ordered: {props.cart.length}</h4>
        </div>
    );
};

export default Cart;