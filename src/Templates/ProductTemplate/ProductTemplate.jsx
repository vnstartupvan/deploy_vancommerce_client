import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import api from '../../Api';
import { Spin } from 'antd';
import '../ProductTemplate/ProductTemplate.css';
import ImageSlider from '../../Components/ProductTemplate/ImageSlider/ImageSlider';
import MainProduct from '../../Components/ProductTemplate/MainProduct/MainProduct';
import features from '../../Features';


function ProductTemplate() {
    const params = useParams();
    const [product, setProduct] = useState();

    //Recent view feature
    const saveRecentProduct = useCallback(()=> {
        features.recentProduct.run(product);
    }, [product]);

    if(product) saveRecentProduct();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await api.product(params.productId);
                setProduct(result);
            } catch (error) {
                throw (error);
            }

        }
        window.scrollTo({ top: 0 });
        fetchData();
    }, [])
    return (
        <div className="product-template">
            {/* section main product */}
            <MainProduct data={product}/>

            {/* Section review */}

        </div>
    )
}

export default ProductTemplate