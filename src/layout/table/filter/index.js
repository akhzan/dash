import React, { useState } from 'react'
import FilterView from './index.view'

const Filter = () => {
  const [filterCollapsed, setFilterCollapsed] = useState(false)
  return (
    <FilterView
      activeKey={filterCollapsed}
      toggleCollapse={() => setFilterCollapsed(!filterCollapsed)}
    />
  )
}

export default Filter
