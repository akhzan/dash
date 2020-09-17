import React from 'react'
import { Table } from 'antd'

import MainView from '../../layout/main/index.view'
import Filter from './filter'

const TableView = ({ title, data, loading, columns }) => (
  <MainView title={title || 'Table'}>
    <Filter />
    <Table
      size="middle"
      loading={loading.list}
      rowKey="idx"
      columns={columns}
      dataSource={data.data}
      scroll={{ x: true }}
    />
  </MainView>
)

export default TableView
