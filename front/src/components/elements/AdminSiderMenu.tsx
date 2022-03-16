import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons'

const {SubMenu} = Menu

export const AdminSiderMenu: React.FC = () => (
  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    <Menu.Item key="1" icon={<DesktopOutlined/>}>
      <Link to='/admin'>General</Link>
    </Menu.Item>
    <SubMenu key="2" icon={<PieChartOutlined/>} title="Offers">
      <Menu.Item key="21">Edit Offers</Menu.Item>
      <Menu.Item key="22">Add Offer</Menu.Item>
    </SubMenu>
    <SubMenu key="3" icon={<FileOutlined/>} title="Tickets">
      <Menu.Item key="31">Edit Tickets</Menu.Item>
      <Menu.Item key="32">Add Ticket</Menu.Item>
    </SubMenu>
    <Menu.Item key="4" icon={<UserOutlined/>}>Users</Menu.Item>
  </Menu>
)
