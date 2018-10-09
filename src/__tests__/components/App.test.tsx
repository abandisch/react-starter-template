import { shallow } from 'enzyme'
import * as React from 'react'
import { App } from '../../components/App'

describe('<App />', () => {
  it('renders without crashing', () => {
    const props = {
      onGetMockData: jest.fn(),
      apiError: '',
      data: '',
      isRequestingAPI: false
    }
    shallow(<App {...props} />)
  })
})
