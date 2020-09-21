import React from 'react'
import { Button, Tooltip } from 'antd'
import { CheckOutlined, StopOutlined } from '@ant-design/icons'

import Table, { FILTER_FIELD_TYPES } from '../../layout/table'
import { columns } from './columns'
import { customersApi } from '../../api/customers'

const Customers = () => {
  const list = {
    api: customersApi.get,
    columns: columns,
    extendActionColumn: (record) => {
      const isBlocked = record.customer_status === 'BL'
      return (
        <Tooltip placement="bottom" title={isBlocked ? 'Unblock' : 'Block'}>
          <Button
            className="ml-2"
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
    { type: FILTER_FIELD_TYPES.TEXT, label: 'Search', fieldName: 'search' },
  ]
  return (
    <Table title="Customers" list={list} search={search} filters={filters} />
  )
}

export default Customers
