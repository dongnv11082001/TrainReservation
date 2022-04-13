import React from 'react'
import {LogoutOutlined} from '@ant-design/icons'
import styled from 'styled-components'

export const LogoutButton: React.FC = () => {
  return (
    <LogoutButtonWrapper>
      <LogoutOutlined/>
      <span>Logout</span>
    </LogoutButtonWrapper>
  )
}

const LogoutButtonWrapper = styled.div`
  font-size: 1.2em;
  cursor: pointer;
`