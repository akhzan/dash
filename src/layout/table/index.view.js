import React from 'react'
import { Table } from 'antd'

import MainView from '../../layout/main/index.view'
import Filter from './filter'

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'IDR',
    dataIndex: 'IDR',
    key: 'IDR',
  },
  {
    title: 'JPY',
    dataIndex: 'JPY',
    key: 'JPY',
  },
  {
    title: 'KRW',
    dataIndex: 'KRW',
    key: 'KRW',
  },
]

const TableView = ({ data, loading }) => (
  <MainView title="Table">
    <Filter />
    <Table
      loading={loading.list}
      rowKey="date"
      columns={columns}
      dataSource={data.data}
    />
  </MainView>
)

export default TableView
