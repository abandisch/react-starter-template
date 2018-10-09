import * as api from '../../api'
import * as actionTypes from './actionTypes'
import { IGetMockDataActionRequest, IGetMockDataActionSuccess, IGetMockDataActionError } from '../../types'

const getMockDataRequest = (): IGetMockDataActionRequest => ({ type: actionTypes.GET_MOCK_DATA_REQUEST })
const getMockDataSuccess = (data: string): IGetMockDataActionSuccess => ({ type: actionTypes.GET_MOCK_DATA_SUCCESS, data })
const getMockDataError = (message: string): IGetMockDataActionError => ({ type: actionTypes.GET_MOCK_DATA_ERROR, message })

export const getMockData = () => (dispatch: any) => {
  dispatch(getMockDataRequest())
  api.getMockData()
    .then(response => dispatch(getMockDataSuccess(response.data)))
    .catch(error => dispatch(getMockDataError(error.message || 'Problem getting mock data')))
}
