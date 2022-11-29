import React from 'react';
import '../Product/ProductComponent.css';
import { Link } from 'react-router-dom';
import utils from '../../Utils/utils';
import { HeartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../Store/cartStore';
import { useEffect, useState } from 'react';



function ProductComponent(props) {
    const { product } = props;
    const dispatch = useDispatch();
    const [quickShop, setQuickShop] = useState(false);
    const productURL = product?.slug || utils.getProductUrl(product?.title);


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
        <div className='product-item animate__animated animate__fadeInUp wow'>
            <div className="product-item_image">
                <Link to={`/product/${productURL}`}>
                    <img loading='lazy' src={product.image} alt="" />
                </Link>
                <div className="product-labels">
                    {product?.collections && product.collections.map((collection, index) => {
                        if(index >= 2) return;
                        return <span key={index} className="label">{collection}</span>
                    })}
                </div>
                <HeartOutlined className='wishlist' />
                <div className="product-actions">
                    <button onClick={() => setQuickShop(true)} className="quickview-btn">
                        Quick Shop
                    </button>
                </div>
            </div>
            <div className="product-item_info">
                <Link>
                    <h1 className="product-title">{product.title}</h1>
                </Link>
                <p className="product-price">${product.price_min}</p>
                <p style={{
                    fontSize: ' 12px',
                    color: '#801629',
                    fontWeight: 200
                }} className="bfcm-text">BLACK FRIDAY: 40% Off With Code "BF40"</p>
            </div>
        </div >
    )
}

export default ProductComponent