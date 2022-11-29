import React, { useState, useEffect, useRef, createContext, useCallback } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import api from '../../Api';
import { Spin, Pagination } from 'antd';
import ProductComponent from '../../Components/Product/ProductComponent';
import Cart from '../../Components/Cart/Cart';
import Filter from '../../Components/Filter/Filter';
import utils from '../../Utils/utils';
import ProductList from '../../Components/ProductList/ProductList';
export const FilterContext = createContext();
function CollectionTemplate() {
    const navigate = useNavigate()
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await api.dashboard.products();
                console.log(result);
                setProducts(result);
            } catch (error) {
                if (error.response.status === 404) navigate('*')
                throw (error);
            }
        }
        window.scrollTo({ top: 0 })
        fetchData()
    }, []);

    return (
        <div className='collection-template'>
            <div className="collection-wrapper">
                <div className="collection-nav"></div>
                <div className='toolbar'>
                    <h3 className="collection-mb-title">All Products</h3>
                </div>
                <div style={{width:'100%'}} className="main-collection">
                    <h1 className="collection-title">All products</h1>
                    {/* <div className="product-list">
                            {collection ? renderProduct() : <Spin className='pt-loading' />}
                        </div> */}
                    {products ? <ProductList data={products} /> : <Spin className='pt-loading' />}
                    {/* <div className="pagination">
                            <Pagination defaultCurrent={1} total={50} />
                        </div> */}
                </div>
            </div>
            <Cart />
        </div>
    )
}

export default CollectionTemplate