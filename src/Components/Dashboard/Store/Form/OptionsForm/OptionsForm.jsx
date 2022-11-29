import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, InputNumber, Modal, Typography } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, open }) => {
    const prevOpenRef = useRef();
    useEffect(() => {
        prevOpenRef.current = open;
    }, [open]);
    const prevOpen = prevOpenRef.current;
    useEffect(() => {
        if (!open && prevOpen) {
            form.resetFields();
        }
    }, [form, prevOpen, open]);
};
const ModalForm = ({ open, onCancel }) => {
    const [form] = Form.useForm();
    useResetFormOnCloseModal({
        form,
        open,
    });
    const onOk = () => {
        form.submit();
    };
    return (
        <Modal title="Create Option" open={open} onOk={onOk} onCancel={onCancel}>
            <Form form={form} layout="vertical" name="optionForm">
                <Form.Item
                    name="name"
                    label="Option name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="value"
                    label="Option value"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};
const OptionsForm = () => {
    const [open, setOpen] = useState(false);
    const showUserModal = () => {
        setOpen(true);
    };
    const hideUserModal = () => {
        setOpen(false);
    };
    const onFinish = (values) => {
        console.log('Finish:', values);
    };
    return (
        <Form.Provider
            onFormFinish={(name, { values, forms }) => {
                if (name === 'optionForm') {
                    const { basicForm } = forms;
                    const options = basicForm.getFieldValue('options') || [];
                    basicForm.setFieldsValue({
                        options: [...options, values],
                    });
                    setOpen(false);
                }
            }}
        >
            <Form {...layout} name="basicForm" onFinish={onFinish}>
                <Form.Item
                    label="Options"
                    shouldUpdate={(prevValues, curValues) => prevValues.options !== curValues.options}
                >
                    {({ getFieldValue }) => {
                        const options = getFieldValue('options') || [];
                        return options.length ? (
                            <ul>
                                {options.map((option, index) => (
                                    <li key={index} className="option">
                                        {option.name} - {option.value}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <Typography.Text className="ant-form-text" type="secondary">
                                ( <SmileOutlined /> No option yet. )
                            </Typography.Text>
                        );
                    }}
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button
                        htmlType="button"
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={showUserModal}
                    >
                        Add Option
                    </Button>
                </Form.Item>
            </Form>

            <ModalForm open={open} onCancel={hideUserModal} />
        </Form.Provider>
    );
};
export default OptionsForm;