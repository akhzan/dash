import React from 'react'

import Table from '../../layout/table'
import { columns } from './columns'
import { customersApi } from '../../api/customers'

const Customers = () => {
  const list = {
    api: customersApi.get,
    columns: columns,
  }
  return <Table title="Customers" list={list} />
}

export default Customers
