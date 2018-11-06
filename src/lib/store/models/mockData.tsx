import { IRootState } from '../../types'
import * as api from '../../api'
import { startApi, completeApi } from './apiState'

const mockData = {
  state: {
    data: '',
    api: completeApi()
  },
  reducers: {
    request: (state: IRootState) => Object.assign({}, state, { api: startApi() }),
    complete: (state: IRootState, error: string, data: IRootState['mockData']['data']) => Object.assign({}, state, { data, api: completeApi(error) })
  },
  effects: (dispatch: any) => ({
    async getMockData () {
      dispatch.mockData.request()
      await api.getMockData()
        .then(response => dispatch.mockData.complete(null, response))
        .catch(error => dispatch.mockData.complete(error.message || 'Problem getting mock data'))
    }
  })
}

export default mockData
