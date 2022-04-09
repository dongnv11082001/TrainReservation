import React, {ReactElement, useState} from 'react'
import {AdminSiderMenu} from '../elements/AdminSiderMenu'
import {Header} from '../elements/Header'
import {Footer} from '../elements/Footer'
import {Divider, Input, Space, Typography, Layout} from 'antd'
import styled from 'styled-components'

const {Sider} = Layout

type AdminLayoutProps = {
  searchText?: string
  tableHeading?: string
  modal?: ReactElement
  children?: ReactElement
}

const {Title} = Typography
const {Search} = Input

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  tableHeading,
  searchText,
  modal
}): ReactElement => {
  const [isCollapse, setIsCollapse] = useState<boolean>(true)

  return (
    <ParentLayout>
      <FixedSider
        collapsible
        collapsed={isCollapse}
        onCollapse={() => setIsCollapse(!isCollapse)}
        theme="light"
      >
        <AdminSiderMenu/>
      </FixedSider>
      <Layout>
        <Header isDominated={isCollapse}/>
        <Body isDominated={isCollapse}>
          <Spacing>
            <Title style={{color: '#334c9f'}} level={2}>{searchText}</Title>
            <Space>
              <Search style={{minWidth: 600}} size="large" allowClear placeholder="Input search text" enterButton/>
              {modal}
            </Space>
            <Divider/>
            <Title level={4}>{tableHeading}</Title>
            {children}
          </Spacing>
        </Body>
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
export const Spacing = styled.div`
  padding: 4rem 5%;
`