import * as actionTypes from '../store/actions/actionTypes'

export interface IRootState {
  mockData: {
    apiError: string,
    data: string,
    isRequestingAPI: boolean
  }
}

export interface IGetMockDataActionRequest {
  type: actionTypes.GET_MOCK_DATA_REQUEST
}

export interface IGetMockDataActionSuccess {
  type: actionTypes.GET_MOCK_DATA_SUCCESS,
  data: string
}

export interface IGetMockDataActionError {
  type: actionTypes.GET_MOCK_DATA_ERROR,
  message: string
}

export type MockDataActions = IGetMockDataActionRequest | IGetMockDataActionSuccess | IGetMockDataActionError
