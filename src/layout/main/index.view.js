import React from 'react'
import { Avatar, Button, Layout, Popover } from 'antd'

import MenuView from './menu/menu.view'
import Logo from '../../assets/logo.svg'
import Profile from '../../assets/profile.svg'

const { Content, Sider } = Layout

const MainView = ({ title, children }) => {
  const contentPopover = (
    <div className="text-center">
      <div className="p-4 pb-0">
        <div className="text-xl">Syafrizal Akhzan</div>
        <label>Admin</label>
      </div>
      <div className="border-b border-gray-300 mt-6 mb-2" />
      <div className="p-4 pt-0">
        <Button type="link">Logout</Button>
      </div>
    </div>
  )
  return (
    <Layout>
      <Sider collapsed theme="light">
        <div className="flex justify-center items-center">
          <img className="w-3/6 pt-6 pb-6" src={Logo} alt="" />
        </div>
        <MenuView />
      </Sider>
      <Layout>
        <Content>
          <div className="min-h-screen p-8">
            <div className="mb-8 flex justify-between items-center">
              <div className="font-bold text-3xl">{title}</div>
              <Popover content={contentPopover} placement="bottomRight">
                <Avatar
                  className="bg-gray-400 ml-2 cursor-pointer"
                  size={40}
                  src={Profile}
                />
              </Popover>
            </div>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainView
