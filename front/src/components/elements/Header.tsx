import React from 'react'
import styled from 'styled-components'
import {SlackSquareFilled, SmileOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import {LoginButton} from './LoginButton'
import {LogoutButton} from './LogoutButton'
import {Button, notification} from 'antd'
import {useAuth} from '../../context/authContext'

type HeaderProps = {
    isDominated?: boolean
}


export const Header: React.FC<HeaderProps> = ({isDominated}) => {
  const {isLogin, logout} = useAuth()

  const openNotification = () => {
    notification.open({
      message: 'Log out',
      description: 'Bye, see you again!',
      icon: <SmileOutlined style={{color: '#108ee9'}}/>,
      placement: 'bottomRight'
    })
    logout()
  }
  return (
    <HeaderWrapper isShrink={isDominated}>
      <Logo to='/'>
        <SlackSquareFilled style={{marginRight: 10, fontSize: '2rem'}}/>
        Train Reservation
      </Logo>
      <ButtonWrapper>
        <Link to={'sign_in'}><LoginButton/></Link>
        <Link to={'/sign_in'} style={{color: '#fff'}}>Sign in</Link>
        {isLogin && (
          <button
            style={{
              background: 'none',
              border: 0,
              outline: 0,
              color: '#fff'
            }}
            onClick={openNotification}
          >
            <LogoutButton/>
          </button>
        )}
      </ButtonWrapper>
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
  display: flex;
  align-items: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
`
