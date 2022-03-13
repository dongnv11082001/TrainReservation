import React, {ReactElement, useState} from 'react'
import {Layout} from 'antd'
import styled from 'styled-components'
import {AdminSiderMenu} from '../elements/AdminSiderMenu'
import {GuestSiderMenu} from '../elements/GuestSiderMenu'
import {Header} from './Header'

const {Sider, Footer} = Layout

interface LayoutProps {
  isAdmin?: boolean;
}

export const CommonLayout: React.FC<LayoutProps> = ({
  children,
  isAdmin,
}): ReactElement => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false)

  return (
    <>
      <ParentLayout>
        <FixedSider
          collapsible
          collapsed={isCollapse}
          onCollapse={() => setIsCollapse(!isCollapse)}
          theme="light"
        >
          {isAdmin ? <AdminSiderMenu/> : <GuestSiderMenu/>}
        </FixedSider>
        <Layout>
          <Header isDominated={isCollapse}/>
          <Body isDominated={isCollapse}>{children}</Body>
          <StyledFooter>Train Reservation ©2022 Created by tungdnt & dongnv</StyledFooter>
        </Layout>
      </ParentLayout>
    </>
  )
}

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
`

const ParentLayout = styled(Layout)`
  min-height: 100vh;
  overflow: hidden;
`
const Body = styled.div<{ isDominated: boolean }>`
  min-height: calc(100vh - 70px);
  padding-left: ${({isDominated}) => (isDominated ? '80px' : '200px')};
  transition: padding 0.2s ease;
`
const FixedSider = styled(Sider)`
    overflow: auto;
    position: fixed;        
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
`
const StyledFooter = styled(Footer)`
  text-align: center;
  background: #f7fafc;
  color: #a1a8b4;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`