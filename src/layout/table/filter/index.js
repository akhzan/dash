import React, { useState } from 'react'
import FilterView from './index.view'

const Filter = ({ changeLocationSearch, filter, changeFilterValue }) => {
  const [filterCollapsed, setFilterCollapsed] = useState(false)
  return (
    <FilterView
      activeKey={filterCollapsed}
      toggleCollapse={() => setFilterCollapsed(!filterCollapsed)}
      changeLocationSearch={changeLocationSearch}
      filter={filter}
      changeFilterValue={changeFilterValue}
    />
  )
}

export default Filter
