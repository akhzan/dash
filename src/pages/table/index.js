import React, { useEffect, useState } from 'react'
import TableView from './index.view'
import { apis } from '../../api'

const Table = () => {
  const [data, setData] = useState({})
  const getData = async () => {
    await apis.getHistories().then((res) => {
      const { rates } = res
      const resData = Object.keys(rates)
        .map((date) => {
          const currData = rates[date]
          return {
            IDR: Math.round((currData.IDR + Number.EPSILON) * 100) / 100,
            JPY: Math.round((currData.JPY + Number.EPSILON) * 100) / 100,
            KRW: Math.round((currData.KRW + Number.EPSILON) * 100) / 100,
            date,
          }
        })
        .sort(
          (a, b) =>
            parseInt(b.date.split('-').join('')) -
            parseInt(a.date.split('-').join('')),
        )
      setData({ data: resData, count: resData.length })
    })
  }
  useEffect(() => {
    if (!data.data) {
      getData()
    }
  }, [data.data])
  console.log(data)
  return <TableView data={data} />
}

export default Table
