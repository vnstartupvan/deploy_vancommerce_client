import React, { useState, useEffect } from 'react';
import { Space, Spin, Table, Tag } from 'antd';
import api from '../../../../Api';
import UserModal from '../../Modal/UserModal/UserModal';

function UserList() {
    const [data, setData] = useState(null);
    const [deletedUser, setDeletedUser] = useState(null);
    const [isDeleted, setIsDeleted] = useState(false);
    const columns = [
        {
            title: 'Index',
            dataIndex: 'index',
            key: 'index',
            width: 30,
            render: (text) => <a>{text}</a>,
            responsive: ['lg']
        },
        {
            title: 'User name',
            dataIndex: 'username',
            key: 'username',
            render: (text) => <a>{text}</a>,
            responsive: ['lg', 'sm']
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
            responsive: ['lg']
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            responsive: ['lg', 'sm']
        },
        {
            title: 'Created At',
            key: 'createdAt',
            dataIndex: 'createdAt',
            responsive: ['lg']
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
            responsive: ['lg']
        },
        {
            title: 'Role',
            key: 'role',
            dataIndex: 'role',
            responsive: ['lg', 'sm']
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, user) => (
                <Space size="middle">
                    <UserModal user={user} />
                    <a onClick={() => setDeletedUser(user)} style={{ color: 'red' }}>Delete</a>
                </Space>
            ),
            responsive: ['lg', 'sm']
        },
    ];
    const deleteUser = async (user) => {
        try {
            const result = await api.dashboard.deleteUser(user);
            setDeletedUser(null);
            setIsDeleted(true);
            alert('This user has been deleted!')
            console.log(result);
        } catch (error) {
            throw (error)
        }

    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                let users = await api.dashboard.users();
                users.forEach((user, index) => {
                    user.index = index;
                })
                setData(users)
            } catch (error) {
                throw (error);
            }
        }
        fetchData();
        setIsDeleted(false);
    }, [isDeleted]);
    useEffect(() => {
        if (!deletedUser) return;
        deleteUser(deletedUser);
    }, [deletedUser])
    return (
        <>
            {!data ? <Spin /> : <Table className='product-list-db' columns={columns} dataSource={data} />}
        </>
    )
}

export default UserList;