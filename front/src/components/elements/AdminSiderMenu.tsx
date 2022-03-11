import React from "react";
import { Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export const AdminSiderMenu: React.FC = () => (
  <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
    <Menu.Item key="2" icon={<DesktopOutlined />}>
      Dashboard
    </Menu.Item>
    <Menu.Item key="1" icon={<PieChartOutlined />}>
      Offers
    </Menu.Item>
    <Menu.Item key="9" icon={<FileOutlined />}>
      Tickets
    </Menu.Item>
    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
      <Menu.Item key="3">Tom</Menu.Item>
      <Menu.Item key="4">Bill</Menu.Item>
      <Menu.Item key="5">Alex</Menu.Item>
    </SubMenu>
    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
      <Menu.Item key="6">Team 1</Menu.Item>
      <Menu.Item key="8">Team 2</Menu.Item>
    </SubMenu>
  </Menu>
);
