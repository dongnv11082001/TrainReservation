import React from 'react'
import {
  Form,
  Input,
  Cascader,
  Select,
  Checkbox,
  Button,
  Typography, Divider
} from 'antd'
import {Link} from 'react-router-dom'
import {FormWrapper} from '../login/LoginForm'

const {Title} = Typography
const {Option} = Select
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
]
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
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

export const SignUpForm: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  )

  return <FormWrapper>
    <Title style={{textAlign: 'center'}}>Đăng Kí</Title>
    <Divider/>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['Hà Nội', 'TP.HCM', 'Đà Nẵng'],
        prefix: '84',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="username"
        label="Tên tài khoản"
        tooltip="Đây là tên mà chúng tôi sẽ sử dụng để gọi bạn"
        rules={[
          {
            required: true,
            message: 'Hãy nHập tên tài khoản',
            whitespace: true,
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Nhập lại mật khẩu"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Hãy nhập lại mật khẩu',
          },
          ({getFieldValue}) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'))
            },
          }),
        ]}
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'Email không hợp lê!',
          },
          {
            required: true,
            message: 'Xin hãy nhập email!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="residence"
        label="Địa chỉ thường trú"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Xin hãy nhập địa chỉ!',
          },
        ]}
      >
        <Cascader options={residences}/>
      </Form.Item>

      <Form.Item
        name="phone"
        label="Số điện thoạir"
        rules={[
          {
            required: true,
            message: 'Hãy nhập số điện thoại!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Giới tính"
        rules={[
          {
            required: true,
            message: 'Hãy chọn giới tính của bạn!',
          },
        ]}
      >
        <Select placeholder="Giới tính của bạn là?">
          <Option value="male">Nam</Option>
          <Option value="female">Nữ</Option>
          <Option value="other">Khác</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Hãy chấp nhận thỏa thuận để tiếp tục sử dụng dịch vụ')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          Tôi đã đọc và đồng ý với <Link to="/">bản thỏa thuận</Link>
        </Checkbox>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  </FormWrapper>
}