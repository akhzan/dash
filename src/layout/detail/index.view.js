import React from 'react'
import { Button, Col, Form, Input, Row } from 'antd'

const DetailView = ({ form }) => (
  <Form form={form} name="detailForm" scrollToFirstError layout="vertical">
    <Row gutter={12}>
      {[1, 2, 3].map((x) => (
        <Col key={x} span={8}>
          <Form.Item
            name={x}
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
      ))}
    </Row>
    <Row type="flex" justify="end">
      <Col>
        <Button type="primary">Save</Button>
      </Col>
    </Row>
  </Form>
)

export default DetailView
