import React from 'react'
import {LoginOutlined} from '@ant-design/icons'
import styled from 'styled-components'

export const LoginButton: React.FC = () => {
  return (
    <LoginButtonWrapper>
      <LoginOutlined/>
      <span>Login</span>
    </LoginButtonWrapper>
  )
}

const LoginButtonWrapper = styled.div`
  margin-right: 8px;
  color: #fff;
`