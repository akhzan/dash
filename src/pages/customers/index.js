import React from 'react'
import { Button, Tooltip } from 'antd'
import { CheckOutlined, StopOutlined } from '@ant-design/icons'

import Table, { FILTER_FIELD_TYPES } from '../../layout/table'
import { columns } from './columns'
import { customersApi } from '../../api/customers'
import { CUSTOMER_STATUS_FILTER } from '../../config/constants/customers'

const Customers = () => {
  const list = {
    api: customersApi.get,
    columns: columns,
    extendActionColumn: (record) => {
      const isBlocked = record.customer_status === 'BL'
      return (
        <Tooltip placement="bottom" title={isBlocked ? 'Unblock' : 'Block'}>
          <Button
            shape="circle"
            icon={isBlocked ? <CheckOutlined /> : <StopOutlined />}
          />
        </Tooltip>
      )
    },
  }
  const search = {
    showSearch: true,
    placeholder: 'Search by Customer ID or Phone Number',
  }
  const filters = [
    {
      type: FILTER_FIELD_TYPES.SELECT,
      label: 'Status',
      fieldName: 'status',
      source: CUSTOMER_STATUS_FILTER,
      defaultValue: '',
    },
  ]
  const pagination = { useDefault: false }
  return (
    <Table
      title="Customers"
      list={list}
      search={search}
      filters={filters}
      pagination={pagination}
    />
  )
}

export default Customers
