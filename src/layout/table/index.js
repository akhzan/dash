import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { extendColumns } from './columns'
import TableView from './index.view'
import { PUBLIC_URL } from '../../config/url'
import { filterFieldTypes } from '../../components/filter/field'
import { TABLE_LAYOUT_MODES } from '../../config/constants/layout'

const Table = ({
  title,
  list,
  search,
  filters,
  pagination,
  view,
  edit,
  create,
}) => {
  // STATES
  const [data, setData] = useState({})
  const [loading, setLoading] = useState({})
  const [filter, setFilter] = useState({})

  // ROUTER HOOKS
  const history = useHistory()
  const location = useLocation()
  const pathname = location.pathname.replace(PUBLIC_URL, '')
  const queryFromLocSearch = new URLSearchParams(location.search)

  const modeParam = queryFromLocSearch.get('mode')
  // const idParam = queryFromLocSearch.get('id')
  queryFromLocSearch.delete('mode')
  queryFromLocSearch.delete('id')

  const queryInString = queryFromLocSearch.toString()
  const query = [...queryFromLocSearch.entries()].reduce(
    (prev, curr) => ({ ...prev, [curr[0]]: curr[1] }),
    {},
  )

  // PROPS
  const { api = () => {}, transform, columns = [], extendActionColumn } = list
  const { showSearch, placeholder: placeholderSearch } = search
  const { useDefault: useDefaultPagination = true } = pagination
  const contents = {
    [TABLE_LAYOUT_MODES.VIEW]: view?.content,
    [TABLE_LAYOUT_MODES.EDIT]: edit?.content,
    [TABLE_LAYOUT_MODES.CREATE]: create?.content,
  }
  const matchedContent = contents[modeParam]

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
  const openMode = (mode, id) => {
    changeUrl({ ...filter, mode, id })
  }
  const closeMode = () => {
    const newFilter = { ...filter }
    delete newFilter.mode
    delete newFilter.id
    changeUrl(newFilter)
  }

  // EFFECTS
  useEffect(() => {
    // TODO: set detail when api of mode isn't available
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
        openMode,
      })}
      changeLocationSearch={changeLocationSearch}
      filter={filter}
      changeFilterValue={changeFilterValue}
      showSearch={showSearch}
      placeholderSearch={placeholderSearch}
      filterFields={filters}
      useDefaultPagination={useDefaultPagination}
      changePage={changePage}
      openMode={openMode}
      closeMode={closeMode}
      mode={modeParam}
      modeContent={matchedContent}
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
