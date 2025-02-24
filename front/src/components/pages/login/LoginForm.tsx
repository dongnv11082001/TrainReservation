import React from 'react'
import {Link} from 'react-router-dom'
import {Form, Input, Button, Checkbox, Typography, Divider,} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import styled from 'styled-components'
import {useAuth} from '../../../context/authContext'
import {showNoti} from '../../../utils/showNoti'

const {Title} = Typography

export const LoginForm: React.FC = () => {
  const {authenticate} = useAuth()

  return (
    <FormWrapper>
      <Title style={{textAlign: 'center'}}>Đăng nhập</Title>
      <Divider/>
      <Form
        style={{maxWidth: 500}}
        name="normal_login"
        className="login-form"
        initialValues={{remember: true}}
        onFinishFailed={() => showNoti('error', 'Login Failed')}
        onFinish={authenticate}
      >
        <Form.Item
          name="username"
          rules={[{required: true, message: 'Please enter username!'}]}
        >
          <Input style={{height: 50}} prefix={<UserOutlined className="site-form-item-icon"/>}
            placeholder="Username"/>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{required: true, message: 'Enter password'}]}
        >
          <Input
            style={{height: 50}}
            prefix={<LockOutlined className="site-form-item-icon"/>}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Save Password</Checkbox>
          </Form.Item>
          <Link to='/forget_password'>
            Forgot Password
          </Link>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
          <span style={{margin: '0 10px 0'}}>or</span>
          <Link to="/sign_up">Create an account</Link>
        </Form.Item>
      </Form>
    </FormWrapper>
  )
}
export const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 3rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;`