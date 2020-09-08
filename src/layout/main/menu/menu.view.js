import React from 'react'
import { Menu } from 'antd'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DashboardOutlined,
} from '@ant-design/icons'

const MenuView = () => (
  <Menu mode="inline" defaultSelectedKeys={['4']}>
    <Menu.Item key="/" icon={<DashboardOutlined />}>
      Dashboard
    </Menu.Item>
    <Menu.Item key="1" icon={<UserOutlined />}>
      nav 1
    </Menu.Item>
    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
      nav 2
    </Menu.Item>
    <Menu.Item key="3" icon={<UploadOutlined />}>
      nav 3
    </Menu.Item>
    <Menu.Item key="4" icon={<UserOutlined />}>
      nav 4
    </Menu.Item>
  </Menu>
)

export default MenuView
