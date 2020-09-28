import React from 'react'
import { Col, Form, Input, Row } from 'antd'

const DetailView = ({ form }) => (
  <Form form={form} name="detailForm" scrollToFirstError layout="vertical">
    <Row gutter={12}>
      <Col span={8}>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}>
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name="name"
          label="Full Name"
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}>
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name="add"
          label="Full Name"
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}>
          <Input />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name="phon"
          label="Full Name"
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}>
          <Input />
        </Form.Item>
      </Col>
    </Row>
  </Form>
)

export default DetailView
