import React from 'react'
import { Drawer, Table } from 'antd'

import MainView from '../../layout/main/index.view'
import Filter from './filter'
import Pagination from './pagination'
import Detail from '../detail'

const TableView = ({
  title,
  data,
  loading,
  columns,
  changeLocationSearch,
  filter,
  changeFilterValue,
  showSearch,
  placeholderSearch,
  filterFields,
  useDefaultPagination,
  changePage,
  closeMode,
  mode,
}) => (
  <MainView title={title || 'Table'}>
    <Filter
      loading={loading.list}
      changeLocationSearch={changeLocationSearch}
      filter={filter}
      changeFilterValue={changeFilterValue}
      showSearch={showSearch}
      placeholderSearch={placeholderSearch}
      filterFields={filterFields}
    />
    <Table
      size="middle"
      loading={loading.list}
      rowKey="idx"
      columns={columns}
      dataSource={data.data}
      scroll={{ x: true }}
      pagination={useDefaultPagination}
    />
    {!useDefaultPagination && (
      <Pagination
        loading={loading.list}
        count={data.count}
        changePage={changePage}
        currentPage={filter.page}
      />
    )}
    <Drawer
      destroyOnClose
      className="custom-drawer"
      width="80%"
      placement="right"
      onClose={closeMode}
      visible={!!mode}>
      <div className="text-lg mb-10">Drawer</div>
      <Detail />
    </Drawer>
  </MainView>
)

export default TableView
