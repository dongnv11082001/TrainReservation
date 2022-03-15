import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {User} from '../../types/user'
import {Offer} from '../../types/offer'
import {Ticket} from '../../types/ticket'

const {SubMenu} = Menu

interface AdminMenuProps {
  users: User[]
  tickets: Ticket[]
  offers: Offer[]
}

export const AdminSiderMenu: React.FC<AdminMenuProps> = ({
  users, tickets, offers
}) => (
  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    <Menu.Item key="1" icon={<DesktopOutlined/>}>
      <Link to='/'>Chung</Link>
    </Menu.Item>
    <SubMenu key="2" icon={<PieChartOutlined/>} title="Quản lý giao dịch">
      {offers?.map((offer, index) => (
        <Menu.Item key={`2${index}`}>{offer.status}</Menu.Item>
      ))}
    </SubMenu>
    <SubMenu key="3" icon={<FileOutlined/>} title="Quản lý vé">
      {tickets?.map((ticket, index) => (
        <Menu.Item key={`3${index}`}>{ticket.departure} - {ticket.destination}</Menu.Item>
      ))}
    </SubMenu>
    <SubMenu key="4" icon={<UserOutlined/>} title="Quản lý Users">
      {users?.map((user, index) => (
        <Menu.Item key={`3${index}`}>{`${user.firstName} ${user.lastName}`}</Menu.Item>
      ))}
    </SubMenu>
  </Menu>
)
