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
      type: FILTER_FIELD_TYPES.TEXT,
      label: 'Search',
      fieldName: 'search',
      placeholder: 'Search',
    },
    { type: FILTER_FIELD_TYPES.DATE, label: 'Date', fieldName: 'date' },
    {
      type: FILTER_FIELD_TYPES.SELECT,
      label: 'Select',
      fieldName: 'select',
      placeholder: 'Select',
      source: [{ code: '1', name: 'Option 1' }],
      sourceLabel: 'name',
      sourceValue: 'code',
    },
    {
      type: FILTER_FIELD_TYPES.RANGE,
      label: 'Range',
      fieldName: ['startDate', 'endDate'],
    },
  ]
  return (
    <Table title="Customers" list={list} search={search} filters={filters} />
  )
}

export default Customers
