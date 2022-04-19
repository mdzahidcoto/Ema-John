import React from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/product';
import Cart from '../Cart/cart'
import {useState} from 'react';
import './shop.css';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shopContainer">
            <div className="productContainer">
                {
                products.map(e => <Product addProduct={addProduct} product={e}></Product>)
                }
            </div>
            <div className="cartContainer">
                    <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;