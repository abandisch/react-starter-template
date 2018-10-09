import * as React from 'react'
import { connect } from 'react-redux'
import { IRootState } from '../../lib/types'
import * as actions from '../../lib/store/actions'
import TopBar from '../ui/TopBar'

interface IApp {
  onGetMockData: () => void
}

type IAppProps = IApp & IRootState['mockData']

export class App extends React.Component<IAppProps> {

  componentDidMount () {
    const { onGetMockData } = this.props
    onGetMockData()
  }

  render () {
    const { isRequestingAPI, data } = this.props
    return (
      <React.Fragment>
        <header>
          <TopBar />
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/components/App/index.tsx</code> and save to reload.
        </p>
        <p>Data: {isRequestingAPI ? <span><em>Getting data ...</em></span> : <code>{data}</code>} </p>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: IRootState) => {
  const { apiError, data, isRequestingAPI } = state.mockData
  return {
    apiError,
    data,
    isRequestingAPI
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onGetMockData: () => dispatch(actions.getMockData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
