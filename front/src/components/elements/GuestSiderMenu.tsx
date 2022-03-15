import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'antd'
import {
  LogoutOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons'

type GuestMenuProps = {
  isLoggedIn?: boolean
}

export const GuestSiderMenu: React.FC<GuestMenuProps> = ({isLoggedIn}) => (
  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    <Menu.Item key="1" icon={<HomeOutlined/>}>
      <Link to="/">Trang chủ</Link>
    </Menu.Item>
    {
      isLoggedIn ? <>
        <Menu.Item key="2" icon={<UserOutlined/>}>
          <Link to='/profile'>Chỉnh sửa hồ sơ</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<LogoutOutlined/>}>
            Đăng xuất
        </Menu.Item>
      </>
        :
        <Menu.Item key="4" icon={<LogoutOutlined/>}>
          <Link to='sign_in'>Đăng nhập</Link>
        </Menu.Item>
    }
  </Menu>
)
