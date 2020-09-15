import React from 'react'
import { Table } from 'antd'

import MainView from '../../layout/main/index.view'

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

const TableView = ({ data }) => (
  <MainView title="Table">
    <Table rowKey="date" columns={columns} dataSource={data.data} />
  </MainView>
)

export default TableView
