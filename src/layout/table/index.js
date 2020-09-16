import React, { useEffect, useState } from 'react'
import TableView from './index.view'

const Table = ({ list }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState({})
  const { api = () => {}, transform, columns = [] } = list
  const getData = async () => {
    setLoading({ ...loading, list: true })
    const resData = await api()
      .then((res) => (transform ? transform(res) : res.data))
      .catch(() => ({}))
    setData(resData)
    setLoading({ ...loading, list: false })
  }
  useEffect(() => {
    if (!data.data) {
      getData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.data])
  return <TableView data={data} loading={loading} columns={columns} />
}

export default Table
