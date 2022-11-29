import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { useEffect } from 'react';
import api from '../../../../Api';
import { useState } from 'react';
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};

function DashboardStoreCollection() {
    const [form] = Form.useForm();
    const [collectionData, setCollectionData] = useState(null);

    const onFinish = async (values) => {
        const createdCollection = values.collection;
        setCollectionData(createdCollection);
    };
    const finishSubmit = () => {
        setCollectionData(null);
        alert('This collection has been created!')
        form.resetFields();
    }
    useEffect(() => {
        const patchCollection = async (collection) => {
            try {
                await api.dashboard.createCollection(collection);
                finishSubmit();
            } catch (error) {
                console.log(error);
                alert(`Error: ${error.response.data}!!!`)
            }
        }
        if (!collectionData) return;
        patchCollection(collectionData);
    }, [collectionData])


    return (
        <div className='create-collection-form'>
            <h1 className='collection-form-title'>Create your collection</h1>
            <Form form={form} {...layout} name="collection" onFinish={onFinish}>
                <Form.Item
                    name={['collection', 'title']}
                    label="Title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your collection title!'
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['collection', 'description']}
                    label="Description"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={['collection', 'image']}
                    label="Image URL"
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
        </div>
    )
}

export default DashboardStoreCollection