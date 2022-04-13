import React from 'react'
import styled from 'styled-components'
import {SlackSquareFilled, SmileOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import {LoginButton} from './LoginButton'
import {LogoutButton} from './LogoutButton'
import {Button, notification} from 'antd'

type HeaderProps = {
    isDominated?: boolean
}

const openNotification = () => {
  notification.open({
    message: 'Log out',
    description: 'Bye, see you again!',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    placement:'bottomRight'
  })
}

export const Header: React.FC<HeaderProps> = ({isDominated}) => {
  return (
    <HeaderWrapper isShrink={isDominated}>
      <Logo to='/'>
        <SlackSquareFilled style={{marginRight: 10, fontSize: '2rem'}}/>
                Train Reservation
      </Logo>
      <div style={{fontSize: '1.2em', display: 'flex'}}>
        <Link to={'sign_in'}><LoginButton/></Link>
        <Button 
          style={{
            background: 'none',
            border: 0,
            outline: 0,
            color: '#0cbcf5'
          }} 
          onClick={openNotification}
        >
          <LogoutButton/>
        </Button>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div<{ isShrink?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em;
  padding-left: ${({isShrink}) => (isShrink ? '100px' : '220px')};
  transition: padding 0.2s ease;
  background: #325a50;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
  rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Logo = styled(Link)`
  color: white;
  font-size: 1.5em;
  font-family: Garamond, serif;
  display: flex;
  align-items: center;
`
