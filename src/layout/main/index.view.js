import React from 'react'
import { Layout } from 'antd'

import MenuView from './menu/menu.view'
import Logo from '../../assets/logo.svg'

const { Content, Sider } = Layout

const MainView = () => (
  <Layout>
    <Sider collapsed theme="light">
      <img className="p-6" src={Logo} alt="" />
      <MenuView />
    </Sider>
    <Layout>
      <Content>
        <div className="min-h-screen p-8">content</div>
      </Content>
    </Layout>
  </Layout>
)

export default MainView
