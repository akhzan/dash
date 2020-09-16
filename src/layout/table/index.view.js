import React from 'react'
import { Table } from 'antd'

import MainView from '../../layout/main/index.view'
import Filter from './filter'

const TableView = ({ data, loading, columns }) => (
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
