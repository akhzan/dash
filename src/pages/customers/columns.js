import React from 'react'
import { Tag } from 'antd'
import { CUSTOMER_STATUS } from '../../config/constants/customers'

export const columns = [
  {
    title: 'Customer ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Customer Name',
    dataIndex: 'customer_name',
    key: 'customer_name',
  },
  {
    title: 'Phone Number',
    dataIndex: 'customer_mobilephone',
    key: 'customer_mobilephone',
  },
  {
    title: 'Updated Date',
    dataIndex: 'updated_at',
    key: 'updated_at',
  },
  {
    title: 'Status',
    dataIndex: 'customer_status',
    key: 'customer_status',
    render: (status) => {
      const statusMapped = CUSTOMER_STATUS[status] || {}
      const color = statusMapped.color || CUSTOMER_STATUS.A.color
      const name = statusMapped.name || CUSTOMER_STATUS.name
      return <Tag color={color}>{name}</Tag>
    },
  },
]
