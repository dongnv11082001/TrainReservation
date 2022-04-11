import React from 'react'
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Typography, Divider
} from 'antd'
import {Link} from 'react-router-dom'
import {FormWrapper} from '../login/LoginForm'
import {useAuth} from '../../../context/authContext'

const {Title} = Typography
const {Option} = Select

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
  const {authenticate} = useAuth()
  const [form] = Form.useForm()

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
    <Title style={{textAlign: 'center'}}>Sign Up</Title>
    <Divider/>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={authenticate}
      initialValues={{
        prefix: '84',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="username"
        label="Username"
        tooltip="This is name that we call you"
        rules={[
          {
            required: true,
            message: 'Please enter username',
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
            message: 'Please enter password',
          },
        ]}
        hasFeedback
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Re-enter password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Enter password',
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
            message: 'Invalid Email!',
          },
          {
            required: true,
            message: 'Please enter email!',
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Enter phone number!',
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
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please enter your gender!',
          },
        ]}
      >
        <Select placeholder="Your Gender?">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Others</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Please accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read and agree with <Link to="/">agreement</Link>
        </Checkbox>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  </FormWrapper>
}