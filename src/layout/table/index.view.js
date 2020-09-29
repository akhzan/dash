import React from 'react'
import { Drawer } from 'antd'

import MainView from '../../layout/main/index.view'
import Detail from '../detail'
import Table from '../../components/table'

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
    <Table
      loading={loading.list}
      changeLocationSearch={changeLocationSearch}
      filter={filter}
      changeFilterValue={changeFilterValue}
      showSearch={showSearch}
      placeholderSearch={placeholderSearch}
      filterFields={filterFields}
      columns={columns}
      data={data}
      useDefaultPagination={useDefaultPagination}
      changePage={changePage}
      currentPage={filter.page}
      rowKey="idx"
    />
    <Drawer
      destroyOnClose
      className="custom-drawer"
      title="Nice"
      width="80%"
      placement="right"
      onClose={closeMode}
      visible={!!mode}>
      <Detail />
    </Drawer>
  </MainView>
)

export default TableView
