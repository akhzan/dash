import React, { useCallback, useState } from 'react'
import { debounce } from 'lodash'
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
  const changeFilter = (newFilterValues) => {
    changeFilterValue(newFilterValues)
    changeLocationSearch(newFilterValues)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceChangeLocationSearch = useCallback(
    debounce(changeLocationSearch, 500),
    [],
  )
  const changeFilterDebounce = (newFilterValues) => {
    changeFilterValue(newFilterValues)
    debounceChangeLocationSearch({ ...filter, ...newFilterValues })
  }
  return (
    <FilterView
      activeKey={filterCollapsed}
      toggleCollapse={() => setFilterCollapsed(!filterCollapsed)}
      changeLocationSearch={changeLocationSearch}
      filter={filter}
      changeFilterValue={changeFilter}
      changeFilterValueDebounce={changeFilterDebounce}
      showSearch={showSearch}
      placeholderSearch={placeholderSearch}
      loading={loading}
      filterFields={filterFields}
    />
  )
}

export default Filter
