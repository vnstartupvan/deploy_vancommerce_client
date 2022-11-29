import React, { useState, useEffect, createContext } from 'react';
import { Space, Spin, Table, Tag } from 'antd';
import ProductModal from '../../Modal/ProductModal/ProductModal';
import '../Products/ProductListStore.css';
import api from '../../../../Api';

export const ProductFormContext = createContext();
function ProductListStore() {
    const [data, setData] = useState(null);
    const [deletedProduct, setDeletedProduct] = useState(null);
    const [remove, setRemove] = useState(false);
    const [triggerEvent, setTriggerEvent] = useState(false);
    const columns = [
        {
            title: 'Index',
            dataIndex: 'index',
            key: 'index',
            width: 30,
            render: (text) => <a>{text}</a>,
            responsive: ['sm']
        },
        {
            title: 'Title',
            dataIndex: 'title',
            render: (text) => <a>{text}</a>,
            responsive: ['sm']
        },
        {
            title: 'Price',
            dataIndex: 'price_min',
            responsive: ['sm']
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            responsive: ['lg']
        },
        {
            title: 'Updated At',
            dataIndex: 'updatedAt',
            responsive: ['lg']
        },
        {
            title: 'Collections',
            dataIndex: 'collections',
            render: (_, { collections }) => (
                <>
                    {collections.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
            responsive: ['sm']
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, product) => (
                <Space size="middle">
                    <ProductModal product={product} />
                    <a onClick={() => { setDeletedProduct(product); setRemove(true) }} style={{ color: 'red' }}>Delete</a>
                </Space>
            ),
            responsive: ['sm']
        },
    ];
    useEffect(() => {
        const fetchData = async () => {
            try {
                let products = await api.dashboard.products();
                products.forEach((product, index) => {
                    product.index = index;
                    product.key = index;
                })
                setData(products)
                setTriggerEvent(false)
            } catch (error) {
                throw (error);
            }
        }
        fetchData()
    }, [triggerEvent]);

    useEffect(() => {
        const deleteData = async () => {
            try {
                await api.dashboard.deleteProduct(deletedProduct);
                alert('The product has been deleted!');
                setTriggerEvent(true)
                setDeletedProduct(null)
                setRemove(false)
            } catch (error) {
                throw (error);
            }
        }
        if (!remove && !deletedProduct) return;
        deleteData()
    }, [remove, deletedProduct]);
    const formContext = {setTriggerEvent}
    return (
        <ProductFormContext.Provider value={formContext}>
            <div className='product-list-db'>
                {!data ? <Spin /> : <Table columns={columns} dataSource={data}/>}
            </div>
        </ProductFormContext.Provider>
    )
}

export default ProductListStore;