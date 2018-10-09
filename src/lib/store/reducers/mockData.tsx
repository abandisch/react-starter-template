import * as types from '../actions/actionTypes'
import { IRootState, MockDataActions } from '../../types'

const initialState: IRootState['mockData'] = {
  apiError: '',
  data: '',
  isRequestingAPI: false
}

const mockData = (state = initialState, action: MockDataActions) => {
  switch (action.type) {
    case types.GET_MOCK_DATA_REQUEST:
      return Object.assign({}, state, { isRequestingAPI: true })
    case types.GET_MOCK_DATA_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        isRequestingAPI: false
      })
    case types.GET_MOCK_DATA_ERROR: {
      return Object.assign({}, state, {
        apiError: action.message,
        isRequestingAPI: false
      })
    }
    default:
      return state
  }
}

export default mockData
