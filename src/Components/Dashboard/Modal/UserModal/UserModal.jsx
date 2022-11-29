import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import api from '../../../../Api';
import UserForm from '../../User/UserForm/UserForm';
const UserModal = ({ user }) => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
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
                title="Update User"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <UserForm handleOk={handleOk} user={user} />
            </Modal>
        </>
    );
};
export default UserModal;