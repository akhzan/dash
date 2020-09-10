import React from 'react'
import { Menu } from 'antd'
import { DashboardOutlined, TableOutlined } from '@ant-design/icons'
import { useLocation, NavLink } from 'react-router-dom'

import { getActiveMenu, MENU_KEYS, MENUS } from '../../../config/menu'

const MenuView = () => {
  const location = useLocation()
  const activeMenu = getActiveMenu(location.pathname)
  return (
    <Menu className="border-r-0" mode="inline" selectedKeys={[activeMenu]}>
      <Menu.Item key={MENU_KEYS.HOME} icon={<DashboardOutlined />}>
        <NavLink to={MENUS.HOME}>Dashboard</NavLink>
      </Menu.Item>
      <Menu.Item key={MENU_KEYS.TABLE} icon={<TableOutlined />}>
        <NavLink to={MENUS.TABLE}>Table</NavLink>
      </Menu.Item>
    </Menu>
  )
}

export default MenuView
