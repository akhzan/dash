import { Form } from 'antd'
import React from 'react'
import CustomerDetailView from './index.view'

const CustomerDetail = () => {
  const [form] = Form.useForm()
  return <CustomerDetailView form={form} />
}

export default CustomerDetail
