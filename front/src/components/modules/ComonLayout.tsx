import React, {ReactElement, useState} from 'react'
import {Layout} from 'antd'
import styled from 'styled-components'
import {AdminSiderMenu} from '../elements/AdminSiderMenu'
import {GuestSiderMenu} from '../elements/GuestSiderMenu'
import {Header} from '../elements/Header'
import {Footer} from '../elements/Footer'
import {useLoading} from '../../context/loadingContext'

const {Sider} = Layout

interface LayoutProps {
  isAdmin?: boolean;
}

export const CommonLayout: React.FC<LayoutProps> = ({
  children,
  isAdmin,
}): ReactElement => {
  const {loading} = useLoading()
  const [isCollapse, setIsCollapse] = useState<boolean>(true)

  if (loading) return <>Loading...</>

  return (
    <ParentLayout>
      <FixedSider
        collapsible
        collapsed={isCollapse}
        onCollapse={() => setIsCollapse(!isCollapse)}
        theme="dark"
      >
        {isAdmin ? <AdminSiderMenu/> : <GuestSiderMenu/>}
      </FixedSider>
      <Layout>
        <Header isDominated={isCollapse}/>
        <Body isDominated={isCollapse}>{children}</Body>
        <Footer/>
      </Layout>
    </ParentLayout>
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
  min-height: calc(100vh - 70px - 61px);
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