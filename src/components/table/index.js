import React from 'react'
import { Table } from 'antd'

import Filter from '../filter'
import Pagination from '../pagination'

const AppTable = ({
  loading,
  changeLocationSearch,
  filter,
  changeFilterValue,
  showSearch,
  placeholderSearch,
  filterFields,
  columns,
  data,
  useDefaultPagination,
  changePage,
  currentPage,
  rowKey,
}) => (
  <div>
    <Filter
      loading={loading}
      changeLocationSearch={changeLocationSearch}
      filter={filter}
      changeFilterValue={changeFilterValue}
      showSearch={showSearch}
      placeholderSearch={placeholderSearch}
      filterFields={filterFields}
    />
    <Table
      size="middle"
      loading={loading}
      rowKey={rowKey}
      columns={columns}
      dataSource={data.data}
      scroll={{ x: true }}
      pagination={useDefaultPagination}
    />
    {!useDefaultPagination && (
      <Pagination
        loading={loading}
        count={data.count}
        changePage={changePage}
        currentPage={currentPage}
      />
    )}
  </div>
)

export default AppTable
