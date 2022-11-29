import React from 'react';
import '../ProductDetail/ProductDetail.css';
import ProductSlider from '../ProductSlider/ProductSlider';

function ProductDetail() {
    return (
        <div className='pt-product-detail'>
            <div className="pt-product-detail-title">
                <h3>Recommend for You</h3>
            </div>
            <div className="products-recommended">
                <h3 className="product-recommended-title">Recommend for You</h3>
                <ProductSlider />
            </div>
            <div className="products-recent-viewed">
                <h3 className="products-recent-viewed-title">Recently viewed</h3>
                <ProductSlider/>
            </div>
        </div>
    )
}

export default ProductDetail