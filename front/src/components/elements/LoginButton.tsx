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
  font-size: 1.2em;
  margin-right: 8px;
`