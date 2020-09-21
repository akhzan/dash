import React, { useState } from 'react'
import FilterView from './index.view'

const Filter = ({
  changeLocationSearch,
  filter,
  changeFilterValue,
  showSearch,
  placeholderSearch,
  loading,
  filterFields,
}) => {
  const [filterCollapsed, setFilterCollapsed] = useState(false)
  return (
    <FilterView
      activeKey={filterCollapsed}
      toggleCollapse={() => setFilterCollapsed(!filterCollapsed)}
      changeLocationSearch={changeLocationSearch}
      filter={filter}
      changeFilterValue={changeFilterValue}
      showSearch={showSearch}
      placeholderSearch={placeholderSearch}
      loading={loading}
      filterFields={filterFields}
    />
  )
}

export default Filter
