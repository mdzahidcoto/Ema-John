import React from 'react';
import './cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // Total price count
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    // Shipping charge of product
    let shipping = 0;
    if(totalPrice > 500){
        shipping = 0;
    }
    else if(totalPrice > 75){
        shipping = 4.99;
    }
    else if(totalPrice > 0) { 
        shipping = 7.99;
    }
    // Tax on product price
    const tax = totalPrice * 0.75;
    // over all total
    const grandTotal = totalPrice + shipping + tax;

    // function to fixed number 2 and return number
    const fixedNum = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Item Ordered: {cart.length}</h4>
            <p>Product Price: ${fixedNum(totalPrice)}</p>
            <p><small>Shipping Charger: ${shipping}</small></p>
            <p><small>Tax + VAT: ${fixedNum(tax)}</small></p>
            <p><strong>Total Price:</strong> ${fixedNum(grandTotal)}</p>   
        </div>
    );
};

export default Cart;