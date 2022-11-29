import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
    CloseOutlined,
    ArrowDownOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, updateItem, removeItem } from '../../Store/cartStore';
import utils from '../../Utils/utils';
import '../CartTemplate/CartTemplate.css';

function CartTemplate() {
    const cartState = useSelector(state => state.cart.cartState);
    const cartList = useSelector(state => state.cart.products);
    const totalPrice = utils.getCartTotalPrice(cartList);
    const totalProducts = utils.getCartQty(cartList);
    const dispatch = useDispatch();

    const renderCartItems = (products) => {
        return products.map(product => {
            return <div key={product.title} className="cart-item">
                <Link to={`/product/${utils.getProductUrl(product.title)}`} className="cart-item-wrapper">
                    <div className="cart-item-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="cart-item-info">
                        <h3 className="cart-item-title">
                            {product.title}
                        </h3>
                        <div className="cart-item-des">
                            <div className="cart-item-action">
                                <button onClick={() => dispatch(removeItem(product.title))} className='cart-del-btn'>Delete</button>
                                <div className="cart-action-qty-wrapper">
                                    <label htmlFor="cart-qty" className="cart-qty-label">Qty: </label>
                                    <select value={product.qty} id="cart-qty" onChange={(e) => dispatch(updateItem({ updatedItem: product.title, selectedQty: e.target.value }))} className="cart-item-qty">
                                        <option value="1" className="qty-option">1</option>
                                        <option value="2" className="qty-option">2</option>
                                        <option value="3" className="qty-option">3</option>
                                        <option value="4" className="qty-option">4</option>
                                        <option value="5" className="qty-option">5</option>
                                        <option value="6" className="qty-option">6</option>
                                        <option value="7" className="qty-option">7</option>
                                        <option value="8" className="qty-option">8</option>
                                        <option value="9" className="qty-option">9</option>
                                        <option value="10" className="qty-option">10</option>
                                    </select>
                                </div>

                            </div>
                            <p className="cart-item-price">
                                ${product.price_min}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        })
    }
    return (
        <div className='cart-template'>
                <div className="sidecart-container">

                    <div className="sidecart-header">
                        <h2 className="sidecart-heading">
                            My Cart ({totalProducts})
                        </h2>
                        <p className="sidecart-ads-info">
                            FREE SHIPPING ON ORDERS $500
                        </p>
                    </div>

                    <div className="sidecart-slider">

                    </div>
                    <hr className="sidecart-divider" />
                    <ul className="sidecart-list">
                        <div className="sidecart-list__header">
                            <p className="sidecart-quantity">
                                Items ({totalProducts})
                            </p>
                            <Link onClick={()=> dispatch(toggleCart())} to={'/collections/mr-simple'} className="sidecart-keep-shopping">
                                Keep shopping
                            </Link>
                        </div>
                        <div className="cart-list">
                            {renderCartItems(cartList)}
                        </div>
                    </ul>
                    <hr className="sidecart-divider" />

                    <div className="sidecart-payment">
                        <div className="sidecart-payment-wrapper">
                            <div className="sidecart-payment-info">
                                <img className='payment-info-icon' src="https://cdn.shopify.com/s/files/1/0077/0432/files/lock_6e2c303e-a5b3-42a6-a64c-0740603713d5_x24.png?v=1657554283" alt="" />
                                <p>100% secured payment</p>
                            </div>
                            <div className="sidecart-payment-images">
                                <div className="payment-images">
                                    <img src="https://cdn.shopify.com/s/files/1/0077/0432/files/PayPal_32b4b4e4-8b30-422b-8984-6bf709f1eca8_x50.png?v=1663170914" alt="" />
                                </div>
                                <div className="payment-images">
                                    <img src="https://cdn.shopify.com/s/files/1/0077/0432/files/Amex_4dbdec05-0c9b-4e43-a7e5-e48db42e1319_x50.png?v=1663170879" alt="" />
                                </div>
                                <div className="payment-images">
                                    <img src="https://cdn.shopify.com/s/files/1/0077/0432/files/Mastercard_1de44f1d-77a7-4c1a-8c63-51d616126b1e_x50.png?v=1663170896" alt="" />
                                </div>
                                <div className="payment-images">
                                    <img src="https://cdn.shopify.com/s/files/1/0077/0432/files/Visa_c9b64ecf-ded9-4479-b8cb-9e85fcd5febb_x50.png?v=1663170856" alt="" />
                                </div>
                            </div>
                            <div className="sidecart-payment-info">
                                <img className='payment-info-icon' src="https://cdn.shopify.com/s/files/1/0077/0432/files/returns_814b69b3-0396-41f5-a4a6-fa3cab7b80b9_x24.png?v=1657554297" alt="" />
                                <p>Free return and exchange within 90 days</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="cart-footer">
                    <div className="sidecart-order">
                        <p>Order Summary</p>
                        <p>${totalPrice}</p>
                        <Link className='show-detail-btn'><span>Show Details</span> <ArrowDownOutlined /></Link>

                    </div>
                </div>
        </div>
    )
}

export default CartTemplate