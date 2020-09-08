import { latest, histories } from './mock'

export const apis = {
  getLatest: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(JSON.parse(latest))
      }, 250)
    }),
  getHistories: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(JSON.parse(histories))
      }, 250)
    }),
}
