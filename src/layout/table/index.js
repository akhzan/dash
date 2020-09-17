import React, { useEffect, useState } from 'react'
import { extendColumns } from './columns'
import TableView from './index.view'

const Table = ({ title, list }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState({})
  const { api = () => {}, transform, columns = [] } = list
  const getData = async () => {
    setLoading({ ...loading, list: true })
    const resData = await api()
      .then((res) => (transform ? transform(res) : res.data))
      .catch(() => ({}))
    setData({
      ...resData,
      data: (resData.data || []).map((dt, idx) => ({
        ...dt,
        idx: (idx + 1) * 1,
      })),
      count: resData.count || resData.data.length,
    })
    setLoading({ ...loading, list: false })
  }
  useEffect(() => {
    if (!data.data) {
      getData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.data])
  return (
    <TableView
      title={title}
      data={data}
      loading={loading}
      columns={extendColumns({ columns })}
    />
  )
}

export default Table
