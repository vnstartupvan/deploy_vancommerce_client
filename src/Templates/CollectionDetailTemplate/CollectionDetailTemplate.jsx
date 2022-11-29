import React, { useState, useEffect, useRef, createContext, useCallback } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import api from '../../Api';
import { Spin, Pagination } from 'antd';
import '../CollectionDetailTemplate/CollectionDetailTemplate.css';
import ProductComponent from '../../Components/Product/ProductComponent';
import Cart from '../../Components/Cart/Cart';
import Filter from '../../Components/Filter/Filter';
import utils from '../../Utils/utils';
import ProductList from '../../Components/ProductList/ProductList';
export const FilterContext = createContext();
function CollectionDetailTemplate() {
    const navigate = useNavigate()
    const params = useParams();
    const initFilter = {
        collections: [],
        categories: [],
    }
    const filterRef = useRef();
    const collectionRef = useRef();
    const [filter, setFilter] = useState(initFilter);
    const [collection, setcollection] = useState(null);
    const [oriProducts, setOriProducts] = useState(null);
    const [products, setProducts] = useState(null);
    const options = utils.prepareOption(products);

    const updateProducts = useCallback(() => {
        const { collections, categories } = filter;
        let temp = collection?.products || [];
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
        window.scrollTo({ top: 0 })
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
    const toggleFilter = () => {
        filterRef.current.classList.toggle('filter-active');
        collectionRef.current.classList.toggle('enable-filter');
    };
    const contextVal = {
        filterEvents,
        clearFilter,
        toggleFilter,
        filter,
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await api.collection(params.collectionId);
                console.log(result);
                setProducts(result.products);
                setcollection(result);
                setOriProducts(result.products);
            } catch (error) {
                if(error.response.status === 404) navigate('*')
                throw (error);
            }
        }
        window.scrollTo({top:0})
        fetchData()
    }, [params]);
    useEffect(() => {
        updateProducts()
    }, [updateProducts]);

    return (
        <FilterContext.Provider value={contextVal}>
            <div ref={collectionRef} className='collection-template'>
                <div className="collection-wrapper">
                    <div className="collection-nav">
                    <Link to={'/collections/all'}>View all products</Link>
                    </div>
                    <div className='toolbar'>
                        <h3 className="collection-mb-title">{collection && collection?.title}</h3>
                        <div onClick={() => { toggleFilter() }} className="filter-header">
                            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="3" width="9" height="3" rx="1.5" fill="currentColor"></rect><rect x="18" y="3" width="4" height="3" rx="1.5" fill="currentColor"></rect><rect x="13" y="13" width="9" height="3" rx="1.5" fill="currentColor"></rect><rect y="13" width="4" height="3" rx="1.5" fill="currentColor"></rect><path fillRule="evenodd" clipRule="evenodd" d="M11.5 6C12.3284 6 13 5.32843 13 4.5C13 3.67157 12.3284 3 11.5 3C10.6716 3 10 3.67157 10 4.5C10 5.32843 10.6716 6 11.5 6ZM11.5 9C13.9853 9 16 6.98528 16 4.5C16 2.01472 13.9853 0 11.5 0C9.01472 0 7 2.01472 7 4.5C7 6.98528 9.01472 9 11.5 9Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.5 16C7.32843 16 8 15.3284 8 14.5C8 13.6716 7.32843 13 6.5 13C5.67157 13 5 13.6716 5 14.5C5 15.3284 5.67157 16 6.5 16ZM6.5 19C8.98528 19 11 16.9853 11 14.5C11 12.0147 8.98528 10 6.5 10C4.01472 10 2 12.0147 2 14.5C2 16.9853 4.01472 19 6.5 19Z" fill="currentColor"></path></svg>
                            <h2 className="filter-title">FILTER BY</h2>
                        </div>                       
                    </div>
                    <div className="collection-sidebar">
                        <Filter options={options} filterRef={filterRef} />
                    </div>
                    <div className="main-collection">
                        <h1 className="collection-title">{collection && collection?.title}</h1>
                        {/* <div className="product-list">
                            {collection ? renderProduct() : <Spin className='pt-loading' />}
                        </div> */}
                        {collection ? <ProductList data={products} /> : <Spin className='pt-loading' />}
                        {/* <div className="pagination">
                            <Pagination defaultCurrent={1} total={50} />
                        </div> */}
                    </div>
                </div>
                <Cart />
            </div>
        </FilterContext.Provider>
    )
}

export default CollectionDetailTemplate