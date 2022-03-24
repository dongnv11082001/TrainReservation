import React, {ReactElement} from 'react'
import {Divider, Input, Space, Typography} from 'antd'
import styled from 'styled-components'
import {CommonLayout} from '../modules/ComonLayout'

type AdminLayoutProps = {
  searchText: string
  tableHeading: string
  modal?: ReactElement
}

const {Title} = Typography
const {Search} = Input

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  tableHeading,
  searchText,
  modal
}): ReactElement => {


  return <CommonLayout isAdmin>
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
  </CommonLayout>
}

export const Spacing = styled.div`
  padding: 4rem 5%;
`