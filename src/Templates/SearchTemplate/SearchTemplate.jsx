import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import api from '../../Api';
import { Spin } from 'antd';
import { Pagination } from 'antd';
import '../CollectionDetailTemplate/CollectionDetailTemplate.css';
import ProductComponent from '../../Components/Product/ProductComponent';
import Cart from '../../Components/Cart/Cart';
import Filter from '../../Components/Filter/Filter';
import utils from '../../Utils/utils';
import { createContext } from 'react';
import { useCallback } from 'react';
export const FilterContextSP = createContext();
function SearchTemplate() {
    const params = useParams();
    const initFilter = {
        collections: [],
        categories: [],
    }
    const filterRef = useRef();
    let [searchParams, setSearchParams] = useSearchParams();
    let searchTerm = searchParams.get('q');
    const [filter, setFilter] = useState(initFilter);
    const [tempProducts, setTempProducts] = useState(null);
    const [oriProducts, setOriProducts] = useState(null);
    const [products, setProducts] = useState(null);
    const options = utils.prepareOption(products);
    const updateProducts = useCallback(() => {
        const { collections, categories } = filter;
        let temp = tempProducts || [];
        if (collections.length === 0 && categories.length === 0) {
            temp = oriProducts;
            setProducts(temp);
        }
        if (collections.length > 0) {
            temp = temp.filter(product => {
                const check = product.collections.find(e => filter.collections.includes(e));
                return check !== undefined;
            })
            setProducts(temp);
        }
        if (categories.length > 0) {
            temp = temp.filter(product => {
                const check = product.product_type.find(e => filter.categories.includes(e));
                return check !== undefined;
            })
            setProducts(temp);
        }
    }, [filter])

    const renderProduct = () => {
        if (!products) return;
        return products.map((product, index) => {
            return <ProductComponent key={index} product={product} />
        })
    }
    const filterEvents = (value, type) => {
        switch (type) {
            case 'COLLECTIONS':
                const foundCollectionOption = filter.collections.findIndex(i => i === value);
                if (foundCollectionOption === -1) {
                    setFilter({ ...filter, collections: [value] });
                    return;
                }
                const updatedColOptions = filter.collections.filter(i => i !== value);
                setFilter({ ...filter, collections: updatedColOptions });
                break;
            case 'CATEGORIES':
                const foundCatOption = filter.categories.findIndex(i => i === value);
                if (foundCatOption === -1) {
                    setFilter({ ...filter, categories: [...filter.categories, value] });
                    return;
                }
                const updatedCatOptions = filter.categories.filter(i => i !== value);
                setFilter({ ...filter, categories: updatedCatOptions });
                break;
            default:
                break;
        }
    }
    const clearFilter = () => {
        setFilter(initFilter);
    }
    const contextVal = {
        filterEvents,
        clearFilter,
        filter,
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await api.search(searchTerm);
                console.log(result)
                setProducts(result);
                setOriProducts(result);
                setTempProducts(result);
            } catch (error) {
                throw (error);
            }
        }
        fetchData()
    }, []);
    useEffect(() => {
        updateProducts()
    }, [updateProducts]);
    window.scrollTo({top:0})
    return (
        <FilterContextSP.Provider value={contextVal}>
            <div className='collection-template'>
                <div className="collection-wrapper">
                    <div className="collection-sidebar">

                        <Filter options={options} filterRef={filterRef} />
                    </div>
                    <div className="main-collection">
                        {
                            products && products.length === 0 ? <h1>No product match with {searchTerm}</h1> :
                                <h1>Search results for {searchTerm}</h1>
                        }

                        <div className="product-list">
                            {products ? renderProduct() : <Spin className='pt-loading' />}
                        </div>
                        <div className="pagination">
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </div>
                </div>
                <Cart />
            </div>
        </FilterContextSP.Provider>
    )
}

export default SearchTemplate