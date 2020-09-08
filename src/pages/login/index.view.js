import React from 'react'
import { Button, Input, Checkbox, Form } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import AuthView from '../../layout/auth/index.view'

const LoginView = ({ onFinish }) => (
  <AuthView>
    <div className="w-3/5">
      <div className="text-3xl font-bold mb-10">Log in to your account</div>
      <Form
        name="login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-between items-center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </div>
        </Form.Item>
        <Form.Item>
          <Button className="w-full" type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
        <div>
          <span>Or </span>
          <a href="/">register now!</a>
        </div>
      </Form>
    </div>
  </AuthView>
)

export default LoginView
