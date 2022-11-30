import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const RegisterTemplate = () => {
    const user = useSelector(state => state.user.user);
    const navigate = useNavigate();
    const fetchData = async (userInfo) => {
        try {
            const user = await axios.post('https://vancommerce.herokuapp.com/register', userInfo);
            alert('Register successfully');
            navigate('/login')
        } catch (error) {
            alert(`ERROR!!! ${error.response.data}`)
            console.log(error)
        }
    };
    const onFinish = async (userInfo) => {
        await fetchData(userInfo);

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, []);
    return (
        <div style={{ marginTop: '20px' }} className="section-register">
            <Form
                style={{ padding: '0 10px' }}
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        {
                            min: 8,
                            message: 'invalid username'
                        },
                        {
                            max: 50,
                            message: 'invalid username'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            min: 8,
                            message: 'passwords min length is 8 characters'
                        },
                        {
                            max: 50,
                            message: 'passwords max length is 8 characters'
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your full name!',
                        },
                        {
                            min: 8,
                            message: 'passwords min length is 8 characters'
                        },
                        {
                            max: 50,
                            message: 'passwords max length is 8 characters'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Age"
                    name="age"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        lg: {
                            offset: 4,
                            span: 16,
                        },
                        xs: {
                            offset: 0,
                            span: 16,
                        }
                    }}
                    style={{ width: '100%', overflow: 'hidden' }}
                >
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default RegisterTemplate;

