import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { actionLogin } from '../Store/userStore';
/*
When user first comes to this template. If the user has logged-in then we will direct to home template. 
If the user has not logged-in. We will let them input their account and execute validation. If everything is correct then we will allow them trigger the submit button.
After the submit button is triggered. We will fetch login data => dispatch the user info to redux (if success) and then redirect to home template.
If the user account is not an valid account then we will let them input their account again.
*/
const LoginTemplate = () => {
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fetchData = async (userInfo) => {
        try {
            let result = await axios.post('https://vancommerceservces.onrender.com/login', userInfo);
            let response = await result.data;
            console.log(response)
            dispatch(actionLogin(response));
            //dispatch user info to redux
            //redirect to homepage
            alert('Login successfully!');
            setTimeout(() => {
                navigate('/')
            }, 1000)
        } catch (error) {
            alert(error.response.data)
            console.log(error)
        }

    }
    const onFinish = async (userInfo) => {
        await fetchData(userInfo)
        console.log('Success:', userInfo);

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    })
    const layout = {
        labelCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 8 }, lg: { span: 8 } },
        wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 12 }, lg: { span: 12 } }
    }
    return (
        <div style={{ marginTop: '20px' }} className="section-login">
            <Form
                style={{padding:'0 10px'}}
                name="basic"
                {...layout}
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
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        lg: {
                            offset: 8,
                            span: 16,
                        },
                        xs: {
                            offset: 0,
                            span: 16,
                        }
                    }}
                    style={{width:'100%', overflow:'hidden'}}
                >
                    <Checkbox>Remember me</Checkbox>
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
                    style={{width:'100%', overflow:'hidden'}}
                >
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default LoginTemplate;