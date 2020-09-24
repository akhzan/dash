import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { extendColumns } from './columns'
import TableView from './index.view'
import { PUBLIC_URL } from '../../config/url'
import { filterFieldTypes } from './filter/field'

const Table = ({ title, list, search, filters, pagination }) => {
  // STATES
  const [data, setData] = useState({})
  const [loading, setLoading] = useState({})
  const [filter, setFilter] = useState({})

  // ROUTER HOOKS
  const history = useHistory()
  const location = useLocation()
  const pathname = location.pathname.replace(PUBLIC_URL, '')
  const queryFromLocSearch = new URLSearchParams(location.search)
  const queryInString = queryFromLocSearch.toString()
  const query = [...queryFromLocSearch.entries()].reduce(
    (prev, curr) => ({ ...prev, [curr[0]]: curr[1] }),
    {},
  )

  // PROPS
  const { api = () => {}, transform, columns = [], extendActionColumn } = list
  const { showSearch, placeholder: placeholderSearch } = search
  const { useDefault: useDefaultPagination = true } = pagination

  // METHODS
  const getData = async (params) => {
    setLoading({ ...loading, list: true })
    const resData = await api({ page: 1, ...params })
      .then((res) => (transform ? transform(res) : res.data))
      .catch(() => ({}))
    setData({
      ...resData,
      data: (resData.data || []).map((dt, idx) => ({
        ...dt,
        idx: (idx + 1) * 1,
      })),
      count: resData.count || (resData.data || []).length,
    })
    setFilter(params)
    setLoading({ ...loading, list: false })
  }
  const changeUrl = (filterParam) => {
    history.push(`${pathname}?${new URLSearchParams(filterParam).toString()}`)
  }
  const changeLocationSearch = (newFilter, isReset) => {
    const filterMapped = isReset
      ? { search: filter.search }
      : { ...filter, ...newFilter }
    // Remove empty properties of filter
    Object.keys(filterMapped).map((key) => {
      !filterMapped[key] && delete filterMapped[key]
      return key
    })
    delete filterMapped.page
    changeUrl(filterMapped)
  }
  const changeFilterValue = (newFilter) => {
    setFilter({ ...filter, ...newFilter })
  }
  const changePage = (page) => {
    const newFilter = { ...filter, page }
    if (page === 1) delete newFilter.page
    setFilter(newFilter)
    changeUrl(newFilter)
  }

  // EFFECTS
  useEffect(() => {
    getData(query)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryInString])
  return (
    <TableView
      title={title}
      data={data}
      loading={loading}
      columns={extendColumns({
        columns,
        extendActionColumn,
        currentPage: filter.page,
      })}
      changeLocationSearch={changeLocationSearch}
      filter={filter}
      changeFilterValue={changeFilterValue}
      showSearch={showSearch}
      placeholderSearch={placeholderSearch}
      filterFields={filters}
      useDefaultPagination={useDefaultPagination}
      changePage={changePage}
    />
  )
}

Table.defaultProps = {
  search: {},
  filters: [],
  pagination: {},
}

export default Table

export const FILTER_FIELD_TYPES = filterFieldTypes
