import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { useContext } from 'react';
import api from '../../../../Api';
import ProductForm from '../../Store/Form/ProductForm/ProductForm';
import { ProductFormContext } from '../../../../Components/Dashboard/Store/Products/ProductListStore'
const ProductModal = ({ product }) => {
    const productFormContext = useContext(ProductFormContext);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
        setOpen(true);
    };
    const updateProduct = async (updatedProduct) => {
        try {
            await api.dashboard.updatedProduct(updatedProduct);
            alert('The product has been updated!');
        } catch (error) {
            throw (error);
        }
    }
    const handleOk = (product) => {
        setModalText('The modal will be closed after two seconds');
        console.log(product)
        setConfirmLoading(true);
        updateProduct(product);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            productFormContext.setTriggerEvent(true);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Update
            </Button>
            <Modal
                title="Update Product"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <ProductForm handleSubmit={handleOk} product={product} />
            </Modal>
        </>
    );
};
export default ProductModal;