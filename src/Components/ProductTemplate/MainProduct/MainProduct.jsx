import React from 'react';
import Foundation from '../Foundation/Foundation';
import ImageSlider from '../ImageSlider/ImageSlider';
import '../MainProduct/MainProduct.css';
import MainProductInfo from '../MainProductInfo/MainProductInfo';
import ProductDetail from '../ProductDetail/ProductDetail';

function MainProduct({ data }) {
    const image = data && data.image || '';
    const images = data && data.images ? data.images : [];
    const testSlider = [
        'https://cdn.shopify.com/s/files/1/0077/0432/products/Water_Sliders_5.5_ClassicSwimTrunk__LS_109222-04_1102222748copy_x780.webp?v=1667941637',
        'https://cdn.shopify.com/s/files/1/0077/0432/products/Water_Sliders_5.5_ClassicSwimTrunk__LS_109222-04_1102222749copy_x780.webp?v=1667941639',
        'https://cdn.shopify.com/s/files/1/0077/0432/products/Water_Sliders_5.5_ClassicSwimTrunk__LS_109222-04_1102222760copy_bb042d6b-b3b7-4aea-8f66-e920323acecd_x780.webp?v=1667941638',
        'https://cdn.shopify.com/s/files/1/0077/0432/products/Water_Sliders_5.5_ClassicSwimTrunk__LS_109222-04_1102222748copy_x780.webp?v=1667941637'
    ]
    return (
        <div className="section-main-product">
            <div className="main-product">
                <div className="leftside-product animate__animated animate__fadeInLeft" data-wow-duration="2s" data-wow-delay="5s">
                    <ImageSlider data={images} image={image} />
                    <Foundation/>
                    <ProductDetail/>
                </div>
                {/* product info (sticky) */}
                <div className="rightside-product pt-product-info animate__animated animate__fadeInRight" data-wow-duration="2s" data-wow-delay="5s">
                    <MainProductInfo product={data} />
                </div>
            </div>
        </div>
    )
}

export default MainProduct