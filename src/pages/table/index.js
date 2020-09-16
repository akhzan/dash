import React from 'react'

import { apis } from '../../api'
import Table from '../../layout/table'
import { columns } from './columns'

const TablePage = () => {
  const list = {
    api: apis.getHistories,
    columns: columns,
    transform: (res) => {
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
      return { data: resData, count: resData.length }
    },
  }
  return <Table list={list} />
}

export default TablePage
