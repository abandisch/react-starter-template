import { IRootState } from '../../types'
import * as api from '../../api'
import { startApi, endApi } from './apiState'

const mockData = {
  state: {
    data: '',
    api: startApi()
  },
  reducers: {
    request: (state: IRootState) => Object.assign({}, state, { api: startApi() }),
    success: (state: IRootState, data: IRootState['mockData']['data']) => Object.assign({}, state, { data, api: endApi() }),
    error: (state: IRootState, error: IRootState['mockData']['api']['error']) => Object.assign({}, state, { api: endApi(error) })
  },
  effects: (dispatch: any) => ({
    async getMockData () {
      dispatch.mockData.request()
      await api.getMockData()
        .then(response => dispatch.mockData.success(response.data))
        .catch(error => dispatch.mockData.error(error.message || 'Problem getting mock data'))
    }
  })
}

export default mockData
