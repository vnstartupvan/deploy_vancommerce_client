import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../../../Api';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const UserForm = ({ handleOk, user }) => {
    const [triggerUpdate, setTriggerUpdate] = useState(false);
    const [updatedUser, setUpdatedUser] = useState(null);
    const onFinish = (values) => {
        const { age, email, name, password, role } = values.user;
        const updatedUser = { ...user, age, password, role, name, email };
        setUpdatedUser(updatedUser);
    };
    const updateUser = async (updatedUser) => {
        try {
            await api.dashboard.updateUser(updatedUser)
            setUpdatedUser(null);
            handleOk();
        } catch (error) {
            throw(error)
        }
    }
    let initialValues = [];
    Object.entries(user).forEach(([key, value]) => {
        initialValues.push({ name: ['user', key], value })
    })
    useEffect(() => {
        if (!updatedUser) return;
        updateUser(updatedUser);
    }, [updatedUser])
    return (
        <Form {...layout} name="nest-messages" fields={initialValues} onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'name']}
                label="Name"
                initialValue={user.name}
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'avatar']}
                label="Avatar URL"
                initialValue={user.avatar}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="Email"
                initialValue={user.email}
                rules={[
                    {
                        type: 'email',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'age']}
                initialValue={user.age}
                label="Age"
                rules={[
                    {
                        type: 'number',
                        min: 0,
                        max: 99,
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name={['user', 'password']}
                initialValue={user.password}
                label="Password"
                rules={[
                    {
                        type: 'password',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'role']}
                initialValue={user.role}
                label="Role"
                rules={[
                    {
                        type: 'role',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    ...layout.wrapperCol,
                    offset: 8,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
export default UserForm;