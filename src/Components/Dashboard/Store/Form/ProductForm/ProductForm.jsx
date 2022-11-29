import { Button, Form, Input, InputNumber, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import api from '../../../../../Api';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 20,
            offset: 8,
        },
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

const ProductForm = ({ handleSubmit, product }) => {
    const [collectionData, setCollectionData] = useState(null);

    const onFinish = (values) => {
        const { title, price_min, price_max, product_type, video, image, images, collections, tags } = values.product;
        let updatedProduct = { ...product, title, price_min, price_max, product_type, video, image, images, collections: Array.isArray(collections) ? collections: [collections], tags }
        delete updatedProduct.index;
        delete updatedProduct.key;
        handleSubmit(updatedProduct);
    };

    let initialValues = [];
    Object.entries(product).forEach(([key, value]) => {
        initialValues.push({ name: ['product', key], value })
    })
    const renderCollections = () => {
        if (!collectionData) return;
        return collectionData.map(collection => {
            return <Select.Option key={collection._id} value={collection.title}>{collection.title}</Select.Option>
        })
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
    return (
        <Form {...layout} name="nest-messages" fields={initialValues} onFinish={onFinish} >
            <Form.Item
                name={['product', 'title']}
                label="Title"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['product', 'price_min']}
                label="Price Min"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name={['product', 'price_max']}
                label="Price Max"
            >
                <InputNumber />
            </Form.Item>
            <Form.List
                name={['product', 'product_type']}
            >
                {(fields, { add, remove }, { errors }) => (
                    <>
                        {fields.map((field, index) => (
                            <Form.Item
                                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                label={index === 0 ? 'Product Type' : ''}
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
                                        placeholder={`Product Type`}
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
                                    offset: 8,
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
                                Add Product Type
                            </Button>
                            <Form.ErrorList errors={errors} />
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item
                name={['product', 'video']}
                label="video"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['product', 'image']}
                label="Main Image URL"
            >
                <Input />
            </Form.Item>
            <Form.List
                name={['product', 'images']}
            >
                {(fields, { add, remove }, { errors }) => (
                    <>
                        {fields.map((field, index) => (
                            <Form.Item
                                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                label={index === 0 ? 'Images URL' : ''}
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
                                        placeholder={`image URL`}
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
                                    offset: 8,
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
                                Add Images
                            </Button>
                            <Form.ErrorList errors={errors} />
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item label="Collections" name={['product', 'collections']}
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
            <Form.List
                name={['product', 'tags']}
            >
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
                                        placeholder={`tag name`}
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
                                    offset: 8,
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
                                Add Tags
                            </Button>
                            <Form.ErrorList errors={errors} />
                        </Form.Item>
                    </>
                )}
            </Form.List>
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
export default ProductForm;