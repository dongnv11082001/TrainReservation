import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons'

export const AdminSiderMenu: React.FC = () => (
  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    <Menu.Item key="1" icon={<DesktopOutlined/>}>
      <Link to='/admin'>General</Link>
    </Menu.Item>
    <Menu.Item key="2" icon={<PieChartOutlined/>}>
      <Link to="/admin/offers">Offers</Link>
    </Menu.Item>
    <Menu.Item key="3" icon={<FileOutlined/>}>
      <Link to="/admin/tickets">Tickets</Link>
    </Menu.Item>
    <Menu.Item key="4" icon={<UserOutlined/>}>
      <Link to="/admin/users">Users</Link>
    </Menu.Item>
  </Menu>
)
