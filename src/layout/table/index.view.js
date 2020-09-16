import React from 'react'
import { Card, Table } from 'antd'

import MainView from '../../layout/main/index.view'
import Filter from './filter'

const TableView = ({ data, loading, columns }) => (
  <MainView title="Table">
    <Filter />
    <Card style={{ minHeight: 700 }}>
      <Table
        size="middle"
        loading={loading.list}
        rowKey="date"
        columns={columns}
        dataSource={data.data}
      />
    </Card>
  </MainView>
)

export default TableView
