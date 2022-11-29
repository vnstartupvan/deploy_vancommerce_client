import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import api from '../../../../Api';
import { useEffect } from 'react';


const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 4,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 20,
        },
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 4,
        },
        sm: {
            span: 20,
            offset: 4,
        },
    },
};

function DashboardStoreProduct() {
    const [form] = Form.useForm();
    const [collectionData, setCollectionData] = useState(null);

    const finishCreating = () => {
        alert('The product has been created successfully!')
        form.resetFields();
    }
    const patchData = async (values) => {
        try {
            await api.dashboard.createProduct(values);
            setTimeout(finishCreating, 1000)
        } catch (error) {
            throw (error);
        }
    }
    const onFinish = (values) => {
        patchData(values);
        finishCreating();
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let collections = await api.dashboard.collections();
                setCollectionData(collections)
            } catch (error) {
                throw (error);
            }
        }
        fetchData()
    }, []);

    const renderCollections = () => {
        if (!collectionData) return;
        return collectionData.map(collection => {
            return <Select.Option key={collection._id} value={collection.title}>{collection.title}</Select.Option>
        })
    }
    return (
        <div className="create-product-form">
            <h1 className="pd-form-title">Create your product</h1>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                form={form}
                layout="horizontal"
                style={{ marginTop: '40px' }}
                onFinish={onFinish}
                initialValues={{ images: [''] }}
            >

                <Form.Item label="Product Title: " name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input title for this product',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Main Image URL: " name="image"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your image URL!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Video URL: " name="video"
                    rules={[
                        {
                            message: 'Please input your video URL!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.List label="Images URL List" name="images">
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? 'Images URL list' : ''}
                                    required={false}
                                    key={field.key}
                                >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: `Please input an image URL or delete this field.`,
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input
                                            placeholder='Image URL'
                                            style={{
                                                width: '60%',
                                            }}
                                        />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            onClick={() => remove(field.name)}
                                        />
                                    ) : null}
                                </Form.Item>
                            ))}
                            <Form.Item wrapperCol={{
                                xs: {
                                    span: 24,
                                    offset: 14,
                                },
                                sm: {
                                    span: 14,
                                    offset: 4,
                                },
                            }}>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{
                                        width: '60%',
                                    }}
                                    icon={<PlusOutlined />}
                                >
                                    Add images
                                </Button>
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>

                <Form.List label="Tags" name="tags">
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? 'Tags' : ''}
                                    required={false}
                                    key={field.key}
                                >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: `Please input a tag or delete this field.`,
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input
                                            placeholder='Tag'
                                            style={{
                                                width: '60%',
                                            }}
                                        />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            onClick={() => remove(field.name)}
                                        />
                                    ) : null}
                                </Form.Item>
                            ))}
                            <Form.Item
                                wrapperCol={{
                                    xs: {
                                        span: 24,
                                        offset: 14,
                                    },
                                    sm: {
                                        span: 14,
                                        offset: 4,
                                    },
                                }}
                            >
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{
                                        width: '60%',
                                    }}
                                    icon={<PlusOutlined />}
                                >
                                    Add tag
                                </Button>
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>

                <Form.List label="Type" name="product_type">
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? 'Product type' : ''}
                                    required={false}
                                    key={field.key}
                                >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: `Please input a type or delete this field.`,
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input
                                            placeholder='Type'
                                            style={{
                                                width: '60%',
                                            }}
                                        />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            onClick={() => remove(field.name)}
                                        />
                                    ) : null}
                                </Form.Item>
                            ))}
                            <Form.Item
                                wrapperCol={{
                                    xs: {
                                        span: 24,
                                        offset: 14,
                                    },
                                    sm: {
                                        span: 14,
                                        offset: 4,
                                    },
                                }}
                            >
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{
                                        width: '60%',
                                    }}
                                    icon={<PlusOutlined />}
                                >
                                    Add product type
                                </Button>
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>

                <Form.Item label="Collections" name="collections"
                    rules={[
                        {
                            required: true,
                            message: 'Please choose a collection!',
                        },
                    ]}
                >
                    <Select>
                        {renderCollections()}
                    </Select>
                </Form.Item>

                <Form.Item label="Price: " style={{ marginBottom: 0 }}>
                    <Form.Item name="price_min" label="Price Min" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                        <InputNumber addonafter="$" controls={false} />
                    </Form.Item>
                    <Form.Item name="price_max" addonafter="$" label="Price Max" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                        <InputNumber addonafter="$" controls={false} />
                    </Form.Item>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        xs: {
                            span: 24,
                            offset: 24,
                        },
                        sm: {
                            span: 16,
                            offset: 16,
                        },
                    }}
                >
                    <Button type="primary" onSubmit={(e) => console.log(e.target.value)} htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default DashboardStoreProduct