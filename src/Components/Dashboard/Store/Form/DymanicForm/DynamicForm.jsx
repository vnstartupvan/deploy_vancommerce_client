import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
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
            offset: 0,
        },
        sm: {
            span: 20,
            offset: 4,
        },
    },
};
const DynamicForm = ({formName, formFor}) => {
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };
    return (
        <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
            <Form.List
                name="names"
            >
                {(fields, { add, remove }, { errors }) => (
                    <>
                        {fields.map((field, index) => (
                            <Form.Item
                                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                label={index === 0 ? formName : ''}
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
                                            message: `Please input a ${formName} or delete this field.`,
                                        },
                                    ]}
                                    noStyle
                                >
                                    <Input
                                        placeholder={`${formName} name`}
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
                        <Form.Item>
                            <Button
                                type="dashed"
                                onClick={() => add()}
                                style={{
                                    width: '60%',
                                }}
                                icon={<PlusOutlined />}
                            >
                                Add field
                            </Button>
                            <Form.ErrorList errors={errors} />
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </Form>
    );
};

export default DynamicForm