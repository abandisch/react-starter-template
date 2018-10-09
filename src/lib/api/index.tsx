// import fetch from 'cross-fetch'
import { delay } from './mockFuncs'

export const getMockData = () => {
  return delay(1000)
    .then(() => ({ data: 'this is the data' }))
}
