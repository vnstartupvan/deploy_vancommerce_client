import React from 'react';
import '../ProductSlider/ProductSlider.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import utils from '../../../Utils/utils';
import features from '../../../Features';



function RecentProducts({ type }) {
    const recentProducts = features.recentProduct.getProductList() || [];
    console.log(recentProducts);
    const navigate = useNavigate();
    const slideRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);
    const currentIndex = useRef(0);
    currentIndex.current = currentSlide;
    let slideWidth = slideRef ? slideRef.current?.clientWidth : 0;
    let slideHeight = slideRef ? slideRef.current?.clientHeight : 0;

    const slidePosition = ({
        transform: `translateX(${-currentIndex.current * slideWidth}px)`,
    })
    const bindEvent = (slideEvent) => {
        const minSlide = currentSlide === 0;
        const maxSlide = currentSlide === recentProducts.length -1;
        if (slideEvent === 'prev' && !minSlide) {
            setCurrentSlide(currentSlide - 1);
        } else if (slideEvent === 'next' && !maxSlide) {
            setCurrentSlide(currentSlide + 1);
        }
    }
    const itemBindEvent = (product) => {
        navigate(`/product/${product.slug}`);
        utils.refreshPage();
    }
    const renderProducts = (products) => {
        return products.map((product, index) => {
            return <div style={{minHeight: slideHeight, minWidth: slideWidth, maxWidth:'233px'}} onClick={() => itemBindEvent(product)} ref={slideRef} key={index} className="product-slide">
                <div className="product-slide-image">
                    <img src={product.image} alt="" />
                </div>
                <div className="product-slide-detail">
                    <h3 className="product-slide-title">{product.title}</h3>
                    <p className="product-slide-price">${product.price_min}</p>
                </div>
            </div>
        })
    }
    return (
        <div className='product-slider-wrapper'>
            <div className="product-slider-dots">
                <button onClick={() => bindEvent('prev')} className="prev-btn">
                    <LeftOutlined />
                </button>
                <button onClick={() => bindEvent('next')} className="next-btn">
                    <RightOutlined />
                </button>
            </div>
            <div style={slidePosition} className="product-slider">
                {renderProducts(recentProducts)}
            </div>
        </div>
    )
}

export default RecentProducts;