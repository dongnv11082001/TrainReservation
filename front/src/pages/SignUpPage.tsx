import React from 'react'
import signinBg from '../asserts/images/signin.jpg'
import {AuthenPageWrapper} from './LoginPage'
import {SignUpForm} from '../components/pages/signup/SignUpForm'

export const SignUpPage: React.FC = () => {
  return (
    <AuthenPageWrapper background={signinBg}>
      <SignUpForm/>
    </AuthenPageWrapper>
  )
}