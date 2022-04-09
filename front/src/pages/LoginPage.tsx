import React from 'react'
import styled from 'styled-components'
import {LoginForm} from '../components/pages/login/LoginForm'
import signinBg from '../asserts/images/signin.jpg'
import {FlexBox} from '../components/modules/AdminLayout'

export const LoginPage: React.FC = () => {
  return (
    <AuthenPageWrapper background={signinBg}>
      <LoginForm/>
    </AuthenPageWrapper>
  )
}
export const AuthenPageWrapper = styled(FlexBox)<{ background: string }>`
  flex-direction: column;
  background: center no-repeat url(${({background}) => background});
  background-size: cover;
  width: 100vw;
  height: 100vh;
`