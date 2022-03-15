import React, {useState} from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Form, Input, Button, Checkbox, Typography, Divider} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import styled from 'styled-components'

const cookies = new Cookies()
const {Title} = Typography

const initialState = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  avatarURL: '',
}

export const LoginForm: React.FC = () => {
  const [form, setForm] = useState(initialState)
  const [isSignup, setIsSignup] = useState(true)

  const handleChange = (e: any) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: any) => {
    const {username, password, phoneNumber, avatarURL, firstName, lastName} = form
    const URL = 'https://apihere.com'
    const {
      data: {token, userId, hashedPassword, fullName},
    } = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {
      username,
      password,
      firstName,
      lastName,
      phoneNumber,
      avatarURL,
    })
    cookies.set('token', token)
    cookies.set('username', username)
    cookies.set('fullName', fullName)
    cookies.set('userId', userId)
    if (isSignup) {
      cookies.set('phoneNumber', phoneNumber)
      cookies.set('avatarURL', avatarURL)
      cookies.set('hashedPassword', hashedPassword)
    }
    window.location.reload()
  }

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
  }

  return (
    <FormWrapper>
      <Title style={{textAlign: 'center'}}>Sign In</Title>
      <Divider/>
      <Form
        style={{maxWidth: 500}}
        name="normal_login"
        className="login-form"
        initialValues={{remember: true}}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="username"
          rules={[{required: true, message: 'Please input your Username!'}]}
        >
          <Input style={{height: 50}} prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{required: true, message: 'Please input your Password!'}]}
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
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link to='/forget_password'>
            Forgot password
          </Link>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
          <span style={{margin: '0 10px 0'}}>Or</span>
          <Link to="/sign_up">register now!</Link>
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