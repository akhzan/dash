import React from 'react'
import { Avatar, Layout } from 'antd'

import MenuView from './menu/menu.view'
import Logo from '../../assets/logo.svg'
import Profile from '../../assets/profile.svg'

const { Content, Sider } = Layout

const MainView = ({ title, children }) => (
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
            <div>
              <Avatar className="bg-gray-400" size={40} src={Profile} />
            </div>
          </div>
          {children}
        </div>
      </Content>
    </Layout>
  </Layout>
)

export default MainView
