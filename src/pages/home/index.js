import React, { useEffect, useState } from 'react'
import HomeView from './index.view'
import { apis } from '../../api'

const Home = () => {
  const [latest, setLatest] = useState({})
  const [histories, setHistories] = useState([])
  useEffect(() => {
    if (!latest.IDR) {
      Promise.all([apis.getLatest(), apis.getHistories()]).then((res) => {
        const { rates: ratesLatest } = res[0]
        const { rates: ratesHistories } = res[1]
        console.log(res[1])
        setLatest({
          IDR: ratesLatest.IDR,
          JPY: ratesLatest.JPY,
          KRW: ratesLatest.KRW,
        })
        setHistories(
          Object.keys(ratesHistories).map((date) => ({
            ...ratesHistories[date],
            date,
          })),
        )
      })
    }
  }, [latest.IDR])
  return <HomeView latest={latest} histories={histories} />
}

export default Home