import React from 'react'
import { Form } from 'antd'

import DetailView from './index.view'

const Detail = () => {
  const [form] = Form.useForm()
  return <DetailView form={form} />
}

export default Detail
