import React, { useEffect, useState } from 'react';
import '../MainProductInfo/MainProductInfo.css';
import { StarFilled, HeartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../Store/cartStore';


function MainProductInfo({ product }) {
    console.log(product);
    const dispatch = useDispatch();
    const [quickShop, setQuickShop] = useState(false);
    useEffect(() => {
        if (!quickShop) return;
        const addProduct = setTimeout(() => {
            dispatch(addItem({ ...product, qty: 1 }))
            setQuickShop(false);
        }, 1000);
        return () => {
            clearTimeout(addProduct);
        }
    }, [quickShop])
    return (
        <>
            {product && <div className='pt-product-info'>
                <h3 className="pt-product-title">{product.title}</h3>
                <div className="pt-review">
                    <div className="pt-review-stars">
                        <StarFilled style={{ fontSize: '18px', color: '#b36206' }} />
                        <StarFilled style={{ fontSize: '18px', color: '#b36206' }} />
                        <StarFilled style={{ fontSize: '18px', color: '#b36206' }} />
                        <StarFilled style={{ fontSize: '18px', color: '#b36206' }} />
                        <StarFilled style={{ fontSize: '18px', color: '#b36206' }} />
                    </div>
                    <div className="pt-review-count">100 REVIEWS</div>
                </div>
                <span className="pt-product-price">${product.price_min}</span>
                <div className="loan">
                    <span className="loan-info">or 4 interest-free payments of $10.43 with</span>
                    <span className="loan-dialog">
                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="98" height="36" viewBox="0 0 100 21">
                            <path className="afterpay-logo-badge-background" fill="#b2fce4" d="M89.85 20.92h-78.9a10.42 10.42 0 110-20.82h78.89a10.42 10.42 0 010 20.83v-.01z"></path>
                            <g className="afterpay-logo-badge-lockup">
                                <path d="M85.05 6.37L82.88 5.1l-2.2-1.27a2.2 2.2 0 00-3.3 1.9v.29c0 .16.08.3.22.38l1.03.58c.28.16.63-.04.63-.37v-.67c0-.34.36-.54.65-.38l2.02 1.16 2 1.15c.3.16.3.58 0 .75l-2 1.15-2.02 1.16a.43.43 0 01-.65-.38v-.33a2.2 2.2 0 00-3.28-1.9l-2.2 1.26-2.19 1.25a2.2 2.2 0 000 3.8l2.18 1.25 2.2 1.27a2.2 2.2 0 003.3-1.9v-.3c0-.15-.09-.3-.23-.37L78.02 14a.43.43 0 00-.64.37v.67c0 .34-.36.54-.65.38l-2-1.16-2-1.15a.43.43 0 010-.75l2-1.15 2-1.16c.3-.16.65.05.65.38v.33a2.2 2.2 0 003.3 1.9l2.2-1.26 2.17-1.25a2.2 2.2 0 000-3.8z"></path>
                                <path d="M70.77 6.78l-5.1 10.53h-2.12l1.91-3.93-3-6.6h2.17l1.93 4.42 2.1-4.42h2.11z"></path>
                                <path d="M19.8 10.5c0-1.24-.92-2.12-2.04-2.12s-2.03.9-2.03 2.14c0 1.23.91 2.14 2.03 2.14s2.03-.88 2.03-2.14m.02 3.74v-.97a3 3 0 01-2.36 1.09c-2.05 0-3.6-1.65-3.6-3.86 0-2.2 1.61-3.87 3.65-3.87.95 0 1.76.42 2.31 1.08v-.95h1.84v7.48h-1.84z"></path>
                                <path d="M30.6 12.6c-.65 0-.84-.24-.84-.87V8.4h1.2V6.78h-1.2V4.96h-1.88v1.82h-2.43v-.74c0-.63.24-.87.9-.87h.42V3.72h-.9c-1.56 0-2.3.5-2.3 2.07v1h-1.04V8.4h1.04v5.85h1.88V8.4h2.43v3.66c0 1.53.6 2.19 2.11 2.19h.97V12.6h-.37z"></path>
                                <path d="M37.35 9.85c-.13-.97-.93-1.56-1.86-1.56-.92 0-1.7.57-1.88 1.56h3.74zM33.6 11c.13 1.1.93 1.74 1.93 1.74.8 0 1.4-.37 1.76-.97h1.94c-.45 1.58-1.87 2.6-3.74 2.6a3.68 3.68 0 01-3.85-3.85 3.78 3.78 0 013.9-3.9 3.74 3.74 0 013.8 4.38H33.6z"></path>
                                <path d="M51.35 10.5c0-1.2-.9-2.12-2.03-2.12-1.12 0-2.03.9-2.03 2.14 0 1.23.9 2.14 2.03 2.14 1.12 0 2.03-.93 2.03-2.14m-5.92 6.79V6.78h1.84v.97a2.97 2.97 0 012.36-1.1c2.02 0 3.6 1.65 3.6 3.85s-1.6 3.87-3.65 3.87a2.9 2.9 0 01-2.26-1v3.93h-1.9.01z"></path>
                                <path d="M59.86 10.5c0-1.24-.9-2.12-2.03-2.12-1.12 0-2.04.9-2.04 2.14 0 1.23.92 2.14 2.04 2.14s2.03-.88 2.03-2.14m.02 3.74v-.97a3 3 0 01-2.36 1.09c-2.05 0-3.6-1.65-3.6-3.86 0-2.2 1.61-3.87 3.64-3.87.96 0 1.76.42 2.32 1.08v-.95h1.84v7.48h-1.84z"></path>
                                <path d="M42.11 7.5s.47-.86 1.62-.86c.5 0 .8.17.8.17v1.9s-.69-.42-1.32-.33c-.64.09-1.04.67-1.04 1.45v4.42h-1.9V6.78h1.84v.73z"></path>
                            </g>
                        </svg>
                    </span>
                </div>
                <div className="pt-product-actions">
                    <button onClick={() => setQuickShop(true)} className="pt-atc-button">
                        Add to cart
                    </button>
                    <span className="pt-wislist">
                        <HeartOutlined />
                    </span>
                </div>
            </div>}
        </>
    )
}

export default MainProductInfo